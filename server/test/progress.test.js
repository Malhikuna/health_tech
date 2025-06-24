import {
  removeTestUser,
  createTestUser,
  getToken,
  createProgram,
  removeProgram,
  removeUserProgram,
  createUserProgram,
  createRecipes,
  createIngredients,
  createRecipeIngredients,
  removeRecipeIngredients,
  removeIngredients,
  removeRecipes,
  removeUserActivity,
  createDailyPlan,
  removeDailyPlan,
  getProgram, getUserProgram
} from "./test-util.js";
import supertest from "supertest";
import {web} from "../src/application/web.js";
import {logger} from "../src/application/logging.js";

describe('GET /api/progress/log-meal', function () {
  beforeEach(async () => {
    await createTestUser();
    await createProgram();
    await createUserProgram();
    await createRecipes();
    await createIngredients();
    await createRecipeIngredients();
    await createDailyPlan();
  })

  afterEach(async () => {
    await removeDailyPlan();
    await removeRecipeIngredients();
    await removeIngredients()
    await removeRecipes();
    await removeUserActivity();
    await removeUserProgram();
    await removeProgram();
    await removeTestUser();
  })

  it('should can log meal', async () => {
    const token = await getToken();
    const {program_id: programId} = await getUserProgram();

    const result = await supertest(web)
      .post('/api/progress/log-meal')
      .set('Authorization', `Bearer ${token}`)
      .send({
        "programId": programId,
        "dayNumber": 1,
        "mealType": "breakfast",
        "completed": 1
      })

    logger.info(result.body);

    expect(result.status).toBe(200);
  });
})