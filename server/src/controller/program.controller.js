import programService from '../service/program.service.js';

const getPrograms = async (req, res, next) => {
  try {
    const result = await programService.getPrograms();
    res.status(200).json({
      success: true,
      message: 'Berhasil',
      data: result,
    });
  } catch (e) {
    next(e);
  }
}

const getProgram = async (req, res, next) => {
  try {
    const result = await programService.getProgram(req.params.id);
    res.status(200).json({
      success: true,
      message: 'Berhasil',
      data: result,
    });
  } catch (e) {
    next(e);
  }
}

export default {
  getProgram,
  getPrograms
}