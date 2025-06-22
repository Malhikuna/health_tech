import joi from 'joi'

export const getRecipeValidation = joi.number().min(1).required();