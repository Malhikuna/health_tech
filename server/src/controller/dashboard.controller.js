import dashboardService from "../service/dashboard.service.js";

const getDashboardToday = async (req, res, next) => {
  try {
    const result = await dashboardService.getDashboardToday(req.user.id);
    res.status(200).json({
      success: true,
      message: "Berhasil mendapatkan data dashboard untuk hari ini",
      data: result
    })
  } catch (e) {
    next(e);
  }
}

export default {getDashboardToday};