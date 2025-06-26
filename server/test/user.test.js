import {
  removeTestUser,
  createTestUser,
  getToken,
  getUserCurrent,
  createProgram,
  removeProgram,
  getProgram, removeUserProgram
} from "./test-util.js";
import supertest from "supertest";
import {web} from "../src/application/web.js";
import {logger} from "../src/application/logging.js";

describe('GET /api/user/current', function () {
  beforeEach(async () => {
    await createTestUser();
  })

  afterEach(async () => {
    await removeTestUser();
  })

  it('should can get current user', async () => {
    const token = await getToken();

    const result = await supertest(web)
      .get('/api/user/current')
      .set('Authorization', `Bearer ${token}`)

    logger.info(result.body);

    expect(result.status).toBe(200);

    expect(result.body.data.email).toBe("test@test.com");
    expect(result.body.data.first_name).toBe("test");
  });
})

describe('POST /api/user/start-program', function () {
  beforeEach(async () => {
    await createTestUser();
    await createProgram();
  })

  afterEach(async () => {
    await removeUserProgram();
    await removeProgram();
    await removeTestUser();
  })

  it('should can create program for user', async () => {
    const token = await getToken();
    const {id: programId} = await getProgram();

    const result = await supertest(web)
      .post('/api/user/start-program')
      .set('Authorization', `Bearer ${token}`)
      .send({
        program_id: programId,
        profile_data: {
          height: 170,
          weight: 60,
          age: 25,
          gender: "pria",
          activity_level: "ringan",
          goal: "jaga_bb"
        }
      })

    logger.info(result.body);

    expect(result.status).toBe(200);
  });
})