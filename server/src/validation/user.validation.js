import joi from "joi";

const getUserValidation = joi.string().min(32).required();

const createUserProgramValidation = joi.object({
  program_id: joi.string().min(32).required(),
  profile_data: joi.object({
    height: joi.number().required(),
    weight: joi.number().required(),
    age: joi.number().required(),
    gender: joi.string().required(),
    activity_level: joi.string().required(),
    goal: joi.string().required(),
  })
})

export {
  getUserValidation,
  createUserProgramValidation,
}