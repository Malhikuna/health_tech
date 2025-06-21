import {prismaClient} from "../src/application/database.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {JWT_EXPIRES_IN, JWT_SECRET} from "../src/application/env.js";

export const removeTestUser = async () => {
  await prismaClient.user.deleteMany({
    where: {
      email: "test@test.com",
    }
  })
}

export const createTestUser = async () => {
  await prismaClient.user.create({
    data: {
      email: "test@test.com",
      password: await bcrypt.hash("rahasia", 10),
      first_name: "test",
      last_name: "test",
    }
  })

  return jwt.sign({userId: newUser.id}, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN});
}