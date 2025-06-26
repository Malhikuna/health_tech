import {prismaClient} from "../src/application/database.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {JWT_EXPIRES_IN, JWT_SECRET} from "../src/application/env.js";
import {calculateTargets} from "../src/util/nutritionCalculator.js";
import {dailyPlanData, ingredientData, recipeData, recipeIngredientsData} from "./dummydata.js";
import {getWIBDate} from "../src/util/date.js";

export const removeTestUser = async () => {
  await prismaClient.user.deleteMany({
    where: {
      email: "test@test.com",
    }
  })
}

export const createTestUser = async () => {
  await prismaClient.user.create({
    data: {
      email: "test@test.com",
      password: await bcrypt.hash("rahasia", 10),
      first_name: "test",
      last_name: "test",
      created_at: getWIBDate()
    }
  })
}

export const getUserCurrent = async () => {
  return prismaClient.user.findUnique({
    where: {email: "test@test.com"},
    select: {
      id: true,
    }
  })
}

export const getToken = async () => {
  let user = await getUserCurrent();

  return jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

/* Program */

export const createProgram = async () => {
  await prismaClient.program.createMany({
    data:[
      {
        name: "Program Tantangan Hari Makan Bersih (Clean Eating)",
        description: "Program detoksifikasi ringan untuk membersihkan sistem pencernaan, meningkatkan energi, dan memulai kebiasaan makan sehat dengan fokus pada makanan utuh minim olahan.",
        cover_image_url: "/images/clean-eating.jpg",
        duration_days: 7
      },
      {
        name: "Program Turun Berat Badan 30 Hari",
        description: "...",
        cover_image_url: "/images/turun-bb.jpg",
        duration_days: 30
      }
    ]
  })
}

export const removeProgram = async () => {
  await prismaClient.program.deleteMany();
}

export const getProgram = async () => {
  return prismaClient.program.findFirst({
    where: {
      name: "Program Tantangan Hari Makan Bersih (Clean Eating)",
    },
    select: {
      id: true,
      name: true
    }
  });
}

/* User Program */

export const createUserProgram = async () => {
  const {id: userId} = await getUserCurrent();
  const {id: programId} = await getProgram()

  const profile_data =  {
    height: 170,
    weight: 60,
    age: 25,
    gender: "pria",
    activity_level: "ringan",
    goal: "jaga_bb"
  }

  const { targetCalories } = calculateTargets(profile_data);

  await prismaClient.user_Program.create({
    data: {
      start_date: new Date(),
      status: 'active',
      profile_data: profile_data,
      calculated_target_calories: targetCalories,
      user: {
        connect: { id: userId },
      },
      program: {
        connect: { id: programId}
      }
    },
    include: {
      program: {
        select: {
          name: true,
        },
      },
    },
  })
}

export const removeUserProgram = async () => {
  await prismaClient.user_Program.deleteMany()
}

export const getUserProgram = async () => {
  const {id: userId} = await getUserCurrent();
  const {id: programId} = await getProgram();

  return prismaClient.user_Program.findFirst({
    where: {
      user_id: userId,
      program_id: programId,
    }
  })
}

/* User Activity */

export const createUserActivity = async () => {
  const {id: userProgramId, start_date} = await getUserProgram();

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const startDate = new Date(start_date);
  startDate.setHours(0, 0, 0, 0);

  const currentDayNumber = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 3600 * 24)) + 1;

  await prismaClient.user_Activity.create({
    data: {
      user_program_id: userProgramId,
      day_number: currentDayNumber,
      activity_date: getWIBDate(),
    },
  })
}

export const removeUserActivity = async () => {
  await prismaClient.user_Activity.deleteMany()
};

export const getUserActivity = async () => {
  const {id: userProgramId} = await getUserProgram();

  return prismaClient.user_Activity.findFirst({
    where: {
      user_program_id: userProgramId,
    }
  })
}


/* Recipes */

export const createRecipes = async () => {
  await prismaClient.recipe.createMany({
    data: recipeData
  })
}

export const removeRecipes = async () => {
  await prismaClient.recipe.deleteMany();
}

/* Ingredients */

export const createIngredients = async () => {
  await prismaClient.ingredient.createMany({
    data: ingredientData
  })
}

export const removeIngredients = async () => {
  await prismaClient.ingredient.deleteMany();
}

/* Recipe Ingredients */

export const createRecipeIngredients = async () => {
  await prismaClient.recipe_Ingredient.createMany({
    data: recipeIngredientsData
  })
}

export const removeRecipeIngredients = async () => {
  await prismaClient.recipe_Ingredient.deleteMany();
}

/* Daily Plan */

export const createDailyPlan = async () => {
  const {id: programId} = await getProgram();

  await prismaClient.daily_Plan.createMany({
    data: [
      // Hari ke-1
      {
        program_id: programId,
        day_number: 1,
        breakfast_recipe_id: 5,
        lunch_recipe_id: 1,
        dinner_recipe_id: 3,
      },
      // Hari ke-2
      {
        program_id: programId,
        day_number: 2,
        breakfast_recipe_id: 4,
        lunch_recipe_id: 2,
        dinner_recipe_id: 3,
      },
      // Hari ke-3
      {
        program_id: programId,
        day_number: 3,
        breakfast_recipe_id: 5,
        lunch_recipe_id: 1,
        dinner_recipe_id: 2,
      },
      // Hari ke-4
      {
        program_id: programId,
        day_number: 4,
        breakfast_recipe_id: 4,
        lunch_recipe_id: 2,
        dinner_recipe_id: 3,
      },
      // Hari ke-5
      {
        program_id: programId,
        day_number: 5,
        breakfast_recipe_id: 5,
        lunch_recipe_id: 1,
        dinner_recipe_id: 2,
      },
      // Hari ke-6
      {
        program_id: programId,
        day_number: 6,
        breakfast_recipe_id: 4,
        lunch_recipe_id: 2,
        dinner_recipe_id: 3,
      },
      // Hari ke-7
      {
        program_id: programId,
        day_number: 7,
        breakfast_recipe_id: 5,
        lunch_recipe_id: 1,
        dinner_recipe_id: 2,
      },
    ]
  })
}

export const removeDailyPlan = async () => {
  const {id: programId} = await getProgram();

  await prismaClient.daily_Plan.deleteMany({
    where: {
      program_id: programId
    }
  })
}

export const getDailyPlan = async () => {
  const {id: programId} = await getProgram();

  return prismaClient.daily_Plan.findFirst({
    where: {
      program_id: programId
    }
  })
}