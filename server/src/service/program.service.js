import {prismaClient} from "../application/database.js";
import {ResponseError} from "../error/response.error.js";
import {validate} from "../validation/validation.js";
import {getProgramValidation} from "../validation/program.validation.js";

const getPrograms = async () => {
  const programs = await prismaClient.program.findMany()

  if (programs.length === 0) {
    throw new ResponseError(401, "Program tidak ditemukan");
  }

  return programs;
}

const getProgram = async (id) => {
  id = validate(getProgramValidation, id);

  const program = await prismaClient.program.findUnique({
    where: {
      id: id
    }
  })

  if (!program) {
    throw new ResponseError(401, "Program tidak ditemukan");
  }

  return program;
}

export default {getPrograms, getProgram}