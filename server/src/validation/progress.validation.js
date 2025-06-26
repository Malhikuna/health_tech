import joi from 'joi'

export const createLogMealValidation = joi.object({
  programId: joi.string().min(32).required(),
  dayNumber: joi.number().required(),
  mealType: joi.string().required(),
  completed: joi.number().max(1),
})