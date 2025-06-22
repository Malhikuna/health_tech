import {validate} from "../validation/validation.js";
import {loginUserValidation, registerUserValidation} from "../validation/auth.validation.js";
import {ResponseError} from "../error/response.error.js";
import {prismaClient} from "../application/database.js";
import {v4 as uuid} from "uuid";
import jwt from 'jsonwebtoken';
import {JWT_EXPIRES_IN, JWT_SECRET} from "../application/env.js";
import bcrypt from "bcryptjs";

const register = async (request) => {
  const user = validate(registerUserValidation, request);

  const countUser = await prismaClient.user.count({
    where: {
      email: user.email
    }
  });

  if (countUser === 1) {
    throw new ResponseError(400, "Email sudah terpakai");
  }

  user.password = await bcrypt.hash(user.password, 10);

  const newUser = await prismaClient.user.create({
    data: user,
    select: {
      id: true,
      email: true,
      password: true,
      first_name: true,
      last_name: true,
    }
  })

  const token = jwt.sign({userId: newUser.id}, JWT_SECRET, {expiresIn:  JWT_EXPIRES_IN});

  return {
    user: newUser,
    token: token,
  }
}

const login = async (request) => {
  const loginRequest = validate(loginUserValidation, request);

  const user = await prismaClient.user.findUnique({
    where: {
      email: loginRequest.email
    },
    select: {
      id: true,
      email: true,
      password: true,
      first_name: true,
      last_name: true,
    }
  });

  if (!user) {
    throw new ResponseError(400, "Email atau password salah");
  }

  const isPasswordValid = await bcrypt.compare(loginRequest.password, user.password);
  if (!isPasswordValid) {
    throw new ResponseError(401, "Email atau password salah");
  }

  const token = jwt.sign({userId: user.id}, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN});

  return {
    user: user,
    token: token,
  }
}

export default {register, login};