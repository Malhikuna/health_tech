import {validate} from "../validation/validation.js";
import {ResponseError} from "../error/response.error.js";
import {prismaClient} from "../application/database.js";
import jwt from 'jsonwebtoken';
import {JWT_EXPIRES_IN, JWT_SECRET} from "../application/env.js";
import {getUserValidation} from "../validation/user.validation.js";
import {logger} from "../application/logging.js";

const getUserCurrent = async (id) => {
  id = validate(getUserValidation, id);

  const user = await prismaClient.user.findUnique({
    where: {
      id: id
    },
    select: {
      id: true,
      email: true,
      first_name: true,
      last_name: true,
    }
  })

  if (!user) {
    throw new ResponseError(401, "User tidak ditemukan");
  }

  return user;
}

export default {getUserCurrent}