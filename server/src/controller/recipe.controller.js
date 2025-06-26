import recipeService from '../service/recipe.service.js';

const getRecipe = async (req, res, next) => {
  try {
    const result = await recipeService.getRecipe(req.user.id, req.params.id);
    res.status(200).json({
      success: true,
      message: 'Berhasil',
      data: result,
    })
  } catch (e) {
    next(e);
  }
}

export default {
  getRecipe,
}