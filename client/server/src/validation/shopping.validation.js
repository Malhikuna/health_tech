import joi from 'joi'

export const getOnlineShopValidation = joi.string().min(3).required();

export const getNearbyOfflineShopValidation = joi.object({
  latitude: joi.number().min(3).required(),
  longitude: joi.number().min(3).required(),
  radius: joi.number().min(3).required(),
  type: joi.string().min(3).required(),
});
