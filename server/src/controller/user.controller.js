import userService from "../service/user.service.js";

const getUserCurrent = async (req, res, next) => {
  try {
    const id = req.user.id;
    const result = await userService.getUserCurrent(id);

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (e) {
    next(e);
  }
}

export default { getUserCurrent };