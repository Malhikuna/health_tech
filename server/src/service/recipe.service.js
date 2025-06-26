import {validate} from "../validation/validation.js";
import {getRecipeValidation} from "../validation/recipe.validation.js";
import {prismaClient} from "../application/database.js";
import {ResponseError} from "../error/response.error.js";

const getRecipe = async (userId, recipeId) => {
  recipeId = validate(getRecipeValidation, recipeId);

  const recipe = await prismaClient.recipe.findUnique({
    where: {
      id: recipeId,
    }
  })

  if (!recipe) {
    throw new ResponseError(401, "Resep tidak ditemukan")
  }

  const activeUserProgram = await prismaClient.user_Program.findFirst({
    where: {
      user_id: userId,
      status: "active"
    }
  })

  if (!activeUserProgram) {
    throw new ResponseError(401, "User tidak memiliki program yang sedang aktif.")
  }

  const dailyTargetCalories = activeUserProgram.calculated_target_calories;

  const mealTargetCalories = dailyTargetCalories / 3;

  const baseRecipe = await prismaClient.recipe.findUnique({
    where: { id: recipeId },
    include: {
      Recipe_Ingredient: {
        include: {
          ingredient: true,
        },
      },
    },
  });

  let totalBaseCalories = 0;
  baseRecipe.Recipe_Ingredient.forEach(item => {
    totalBaseCalories += item.base_quantity * item.ingredient.calories_per_unit;
  });

  if (totalBaseCalories === 0) {
    return { ...baseRecipe, calculated_calories: 0, ingredients: [] };
  }

  const scalingFactor = mealTargetCalories / totalBaseCalories;

  const wholeUnits = ['buah', 'siung', 'lembar', 'butir', 'batang'];

  const personalizedIngredients = baseRecipe.Recipe_Ingredient.map(item => {
    const dynamicQuantity = item.base_quantity * scalingFactor;

    let roundedQuantity;
    if (item.ingredient.unit === 'gram' || item.ingredient.unit === 'ml') {
      roundedQuantity = Math.round(dynamicQuantity / 5) * 5;
      if (roundedQuantity === 0 && dynamicQuantity > 0) {
        roundedQuantity = 5;
      }
    } else if (wholeUnits.includes(item.ingredient.unit)) {
      roundedQuantity = Math.round(dynamicQuantity);
      if (roundedQuantity === 0 && dynamicQuantity > 0) {
        roundedQuantity = 1;
      }
    } else {
      roundedQuantity = parseFloat(dynamicQuantity.toFixed(1));
    }

    return {
      name: item.ingredient.name,
      quantity: roundedQuantity,
      unit: item.ingredient.unit,
    };
  });

  return {
    id: baseRecipe.id,
    name: baseRecipe.name,
    imageUrl: baseRecipe.image_url,
    cookingTimeMinutes: baseRecipe.cooking_time_minutes,
    calculatedCalories: Math.round(totalBaseCalories * scalingFactor),
    ingredients: personalizedIngredients,
    instructions: baseRecipe.instructions,
  };
}

export default {
  getRecipe
};