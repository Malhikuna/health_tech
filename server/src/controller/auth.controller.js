import authService from '../service/auth.service.js';

const register = async (req, res, next) => {
  try {
    const result = await authService.register(req.body);
    res.status(200).json({
      success: true,
      message: 'Registrasi berhasil',
      data: {
        token: result.token,
        user: result.user,
      },
    });
  } catch (e) {
    next(e);
  }
}

const login = async (req, res, next) => {
  try {
    const result = await authService.login(req.body);
    res.status(200).json({
      success: true,
      message: 'Login berhasil',
      data: {
        token: result.token,
        user: result.user,
      },
    });
  } catch (e) {
    next(e);
  }
}

const logout = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      message: 'Logout berhasil',
    })
  } catch (e) {
    next(e);
  }
}

export default {
  register,
  login,
  logout
};