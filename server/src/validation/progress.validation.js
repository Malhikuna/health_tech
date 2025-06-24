import joi from 'joi'

export const createLogMealValidation = joi.object({
  programId: joi.number().required(),
  dayNumber: joi.number().required(),
  mealType: joi.string().required(),
  completed: joi.number().max(1),
})