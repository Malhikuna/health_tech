import progressService from "../service/progress.service.js";

const createLogMeal = async (req, res, next) => {
  try {
    await progressService.createLogMeal(req.user.id, req.body);
    res.status(200).json({
      success: true,
      message: "Berhasil dicatat",
    });
  } catch (e) {
    next(e);
  }
}

export default {createLogMeal};