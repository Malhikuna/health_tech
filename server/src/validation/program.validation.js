import joi from 'joi'

export const getProgramValidation = joi.string().min(32).required();