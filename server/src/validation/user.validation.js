import joi from "joi";

const getUserValidation = joi.string().min(32).required();

export {
  getUserValidation
}