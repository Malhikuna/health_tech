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
}

export const getUserCurrent = async () => {
  return prismaClient.user.findUnique({
    where: {email: "test@test.com"},
    select: {
      id: true,
    }
  })
}

export const getToken = async () => {
  let user = await getUserCurrent();

  return jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

export const createProgram = async () => {
  await prismaClient.program.create({
    data: {
      name: "Program Tantangan Hari Makan Bersih (Clean Eating)",
      description: "Program detoksifikasi ringan untuk membersihkan sistem pencernaan, meningkatkan energi, dan memulai kebiasaan makan sehat dengan fokus pada makanan utuh minim olahan.",
      cover_image_url: "/images/clean-eating.jpg",
      duration_days: 7
    }
  })
}

export const removeProgram = async () => {
  const {id: programId} = await getProgram();

  await prismaClient.program.delete({
    where: {
      id: programId,
    }
  })
}

export const getProgram = async () => {
  return  prismaClient.program.findFirst({
    where: {
      name: "Program Tantangan Hari Makan Bersih (Clean Eating)"
    },
    select: {
      id: true,
      name: true
    }
  });
}

export const removeUserProgram = async () => {
  const {id: userId} = await getUserCurrent();
  const {id: programId} = await getProgram();

  await prismaClient.user_Porgram.deleteMany({
    where: {
      user_id: userId,
      program_id: programId,
    }
  })
}