import {validate} from "../validation/validation.js";
import {createLogMealValidation} from "../validation/progress.validation.js";
import {prismaClient} from "../application/database.js";
import {ResponseError} from "../error/response.error.js";
import {getWIBDate} from "../util/date.js";

const createLogMeal = async (userId, request) => {
  request = validate(createLogMealValidation, request);

  const program = await prismaClient.program.findUnique({
    where: {
      id: request.programId
    }
  })

  if (!program) {
    throw new ResponseError(401, "Program tidak ditemukan")
  }

  const {id: userProgramId} = await prismaClient.user_Program.findFirst({
    where: {
      program_id: request.programId,
      user_id: userId
    },
    select: {
      id: true,
      start_date: true
    }
  })

  const {breakfast_completed, lunch_completed, dinner_completed} = await prismaClient.user_Activity.findFirst({
    where: {
      user_program_id: userProgramId,
      day_number: request.dayNumber,
    },
    orderBy: {
      activity_date: 'desc'
    }
  })

  let mealType = {
    breakfast_completed,
    lunch_completed,
    dinner_completed
  };

  if (request.mealType === "breakfast") {
    mealType = {...mealType, breakfast_completed: 1};
  } else if (request.mealType === "lunch") {
    mealType = {...mealType, lunch_completed: 1};
  } else {
    mealType = {...mealType, dinner_completed: 1};
  }

  await prismaClient.user_Activity.create({
    data: {
      user_program_id: userProgramId,
      day_number: request.dayNumber,
      activity_date: getWIBDate(),
      ...mealType
    }
  })
}

export default {createLogMeal};