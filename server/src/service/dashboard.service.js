import {prismaClient} from "../application/database.js";
import {ResponseError} from "../error/response.error.js";
import {getPersonalizedMealCalories} from "../util/nutritionCalculator.js";
import {getWIBDate} from "../util/date.js";

const getDashboardToday = async (userId) => {
  const {
    id: userProgramId,
    start_date,
    calculated_target_calories,
    program: {name: programName, id: programId},
  } = await prismaClient.user_Program.findFirst({
    where: { user_id: userId, status: 'active' },
    include: { program: true },
  });

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const startDate = new Date(start_date);
  startDate.setHours(0, 0, 0, 0);

  const currentDayNumber = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 3600 * 24)) + 1;

  let dailyLog = await prismaClient.user_Activity.findFirst({
    where: {
      user_program_id: userProgramId,
      day_number: currentDayNumber,
    },
    orderBy: {
      activity_date: 'desc'
    }
  });

  let dailyLog1 = await prismaClient.user_Activity.findMany({
    where: {
      user_program_id: userProgramId,
      day_number: currentDayNumber,
    },
    orderBy: {
      activity_date: 'desc'
    }
  });

  if (!dailyLog) {
    // Jika pengguna login pertama kali di hari ini, buatkan log baru
    dailyLog = await prismaClient.user_Activity.create({
      data: {
        user_program_id: userProgramId,
        day_number: currentDayNumber,
        activity_date: getWIBDate(),
      },
    });
  }

  const dailyPlan = await prismaClient.daily_Plan.findFirst({
    where: {
      program_id: programId,
      day_number: currentDayNumber,
    },
    include: {
      breakfast_recipe: true,
      lunch_recipe: true,
      dinner_recipe: true,
    },
  });

  let consumedCalories = 0;
  if (dailyLog.breakfast_completed) {
    consumedCalories += await getPersonalizedMealCalories(dailyPlan.breakfast_recipe.id, calculated_target_calories);
  }
  if (dailyLog.lunch_completed) {
    consumedCalories += await getPersonalizedMealCalories(dailyPlan.lunch_recipe.id, calculated_target_calories);
  }
  if (dailyLog.dinner_completed) {
    consumedCalories += await getPersonalizedMealCalories(dailyPlan.dinner_recipe.id, calculated_target_calories);
  }

  return {
    programName,
    test: dailyLog1,
    dayNumber: currentDayNumber,
    activityDate: dailyLog.activity_date.toISOString().split('T')[0],
    targetCalories: calculated_target_calories,
    consumedCalories: Math.round(consumedCalories),
    meals: {
      breakfast: {
        recipe_id: dailyPlan.breakfast_recipe.id,
        name: dailyPlan.breakfast_recipe.name,
        image_url: dailyPlan.breakfast_recipe.image_url,
        completed: dailyLog.breakfast_completed,
      },
      lunch: {
        recipe_id: dailyPlan.lunch_recipe.id,
        name: dailyPlan.lunch_recipe.name,
        image_url: dailyPlan.lunch_recipe.image_url,
        completed: dailyLog.lunch_completed,
      },
      dinner: {
        recipe_id: dailyPlan.dinner_recipe.id,
        name: dailyPlan.dinner_recipe.name,
        image_url: dailyPlan.dinner_recipe.image_url,
        completed: dailyLog.dinner_completed,
      },
    },
  }
}

export default {getDashboardToday}