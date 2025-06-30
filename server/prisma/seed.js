import { programsData } from '../src/data/programData.js';
import { ingredientsData } from '../src/data/ingredientsData.js';
import {
  recipesData,
  recipeIngredientsData,
  dailyPlanData
} from'../src/data/planData.js';
import {prismaClient} from "../src/application/database.js";

async function main() {
  console.log(`Menghapus data lama...`);
  await prismaClient.daily_Plan.deleteMany();
  await prismaClient.recipe_Ingredient.deleteMany();
  await prismaClient.recipe.deleteMany();
  await prismaClient.program.deleteMany();
  await prismaClient.ingredient.deleteMany();

  console.log(`Memulai proses seeding...`);

  await prismaClient.program.createMany({
    data: programsData,
  });

  await prismaClient.ingredient.createMany({
    data: ingredientsData,
  });

  await prismaClient.recipe.createMany({
    data: recipesData,
  });

  await prismaClient.recipe_Ingredient.createMany({
    data: recipeIngredientsData
  });

  await prismaClient.daily_Plan.createMany({
    data: dailyPlanData,
  });

  console.log(`Seeding selesai.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });