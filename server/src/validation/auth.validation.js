import joi from 'joi';

const registerUserValidation = joi.object({
  email: joi.string().email().max(100).required(),
  password: joi.string().min(6).max(100).required(),
  first_name: joi.string().min(4).max(100).required(),
  last_name: joi.string().min(4).max(100).required(),
})

const loginUserValidation = joi.object({
  email: joi.string().email().max(100).required(),
  password: joi.string().min(6).max(100).required(),
})

export {
  registerUserValidation,
  loginUserValidation,
}