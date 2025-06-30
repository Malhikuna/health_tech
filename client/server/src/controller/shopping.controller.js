import shoppingService from '../service/shopping.service.js'

const getOnlineShop = async (req, res, next) => {
  try {
    const result = await shoppingService.getOnlineShop(req.query.nama_bahan);
    res.status(200).json({
      success: true,
      message: 'Berhasil',
      data: result
    });
  } catch (e) {
    next(e);
  }
}

const getNearbyOfflineShop = async (req, res, next) => {
  try {
    const request = {
      lat: req.query.latitude,
      lon: req.query.longitude,
      radius: req.query.radius,
      type: req.query.type,
    }
    const result = await shoppingService.getNearbyOfflineShop(request);
    res.status(200).json({
      success: true,
      message: 'Berhasil',
      data: result
    })
  } catch (e) {
    next(e);
  }
}

export default {getOnlineShop, getNearbyOfflineShop}