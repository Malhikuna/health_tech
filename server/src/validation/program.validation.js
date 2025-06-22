import joi from 'joi'

export const getProgramValidation = joi.number().min(1).required();