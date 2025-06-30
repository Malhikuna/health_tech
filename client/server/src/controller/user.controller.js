import userService from "../service/user.service.js";

const getUserCurrent = async (req, res, next) => {
  try {
    const id = req.user.id;
    const result = await userService.getUserCurrent(id);

    res.status(200).json({
      success: true,
      message: 'Berhasil mendapatkan data user saat ini',
      data: result,
    });
  } catch (e) {
    next(e);
  }
}

const createUserProgram = async (req, res, next) => {
  try {
    const {id, program_id, start_date, calculated_target_calories, program: {name}} = await userService.createUserProgram(req.user.id , req.body);
    res.status(200).json({
      success: true,
      message: 'Berhasil mengikuti program',
      data: {
        userProgramId: id,
        programId: program_id,
        programName: name,
        startDate: start_date.toISOString().split('T')[0],
        calculatedTargetCalories: calculated_target_calories
      },
    })
  } catch (e) {
    next(e);
  }
}

export default { getUserCurrent, createUserProgram };