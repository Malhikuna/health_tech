import {validate} from "../validation/validation.js";
import {ResponseError} from "../error/response.error.js";
import {prismaClient} from "../application/database.js";
import jwt from 'jsonwebtoken';
import {JWT_EXPIRES_IN, JWT_SECRET} from "../application/env.js";
import {createUserProgramValidation, getUserValidation} from "../validation/user.validation.js";
import {logger} from "../application/logging.js";
import {calculateTargets} from "../util/nutritionCalculator.js";

const getUserCurrent = async (id) => {
  id = validate(getUserValidation, id);

  const user = await prismaClient.user.findUnique({
    where: {
      id: id
    },
    select: {
      id: true,
      email: true,
      password: true,
      first_name: true,
      last_name: true,
    }
  })

  if (!user) {
    throw new ResponseError(401, "User tidak ditemukan");
  }

  return user;
}

const createUserProgram  = async (userId, request) => {
  const {program_id, profile_data} = validate(createUserProgramValidation, request);

  const program = await prismaClient.program.findUnique({
    where: {
      id: program_id,
    }
  })

  if (!program) {
    throw new ResponseError(401, "Program tidak ditemukan");
  }

  const { targetCalories } = calculateTargets(profile_data);

  return prismaClient.$transaction(async (tx) => {

    // A. Nonaktifkan semua program yang sedang aktif untuk pengguna ini
    await tx.user_Program.updateMany({
      where: {
        user_id: userId,
        status: 'active',
      },
      data: {
        status: 'cancelled',
      },
    });

    return tx.user_Program.create({
      data: {
        start_date: new Date(),
        status: 'active',
        profile_data: profile_data,
        calculated_target_calories: targetCalories,
        user: {
          connect: { id: userId },
        },
        program: {
          connect: { id: program_id}
        }
      },
      include: {
        program: {
          select: {
            name: true,
          },
        },
      },
    });
  });
}

export default {getUserCurrent, createUserProgram}