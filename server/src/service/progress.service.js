import {validate} from "../validation/validation.js";
import {createLogMealValidation} from "../validation/progress.validation.js";
import {prismaClient} from "../application/database.js";
import {ResponseError} from "../error/response.error.js";

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

  const {id: userProgramId, start_date} = await prismaClient.user_Program.findFirst({
    where: {
      program_id: request.programId,
    },
    select: {
      id: true,
      start_date: true
    }
  })

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const startDate = new Date(start_date);
  startDate.setHours(0, 0, 0, 0);

  const currentDayNumber = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 3600 * 24)) + 1;

  let mealType = {};

  if (request.mealType === "breakfast") {
    mealType = {breakfast_completed: 1};
  } else if (request.mealType === "lunch") {
    mealType = {lunch_completed: 1};
  } else {
    mealType = {dinner_completed: 1};
  }

  await prismaClient.user_Activity.create({
    data: {
      user_program_id: userProgramId,
      day_number: currentDayNumber,
      activity_date: new Date(),
      ...mealType
    }
  })
}

export default {createLogMeal};