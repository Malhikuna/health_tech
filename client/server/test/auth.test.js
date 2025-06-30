import {removeTestUser, createTestUser} from "./test-util.js";
import supertest from "supertest";
import {web} from "../src/application/web.js";
import {logger} from "../src/application/logging.js";

describe('POST /api/auth/register', function () {

  afterEach(async () => {
    await removeTestUser();
  })

  it('should can register new user', async () => {
    const result = await supertest(web)
      .post('/api/auth/register')
      .send({
        email: 'test@test.com',
        password: 'rahasia',
        first_name: 'test',
        last_name: 'test'
      });

    logger.info(result.body);

    expect(result.status).toBe(200);

    expect(result.body.data.user.email).toBe("test@test.com");
    expect(result.body.data.user.first_name).toBe("test");
    expect(result.body.data.user.password).toBeDefined();
  });
})

describe('POST /api/auth/login', function () {
  beforeEach(async () => {
    await createTestUser();
  })

  afterEach(async () => {
    await removeTestUser();
  })

  it('should can login', async () => {
    const result = await supertest(web)
      .post('/api/auth/login')
      .send({
        email: 'test@test.com',
        password: 'rahasia',
      });

    logger.info(result.body);

    expect(result.status).toBe(200);

    expect(result.body.data.user.email).toBe("test@test.com");
    expect(result.body.data.user.password).toBeDefined();
    expect(result.body.data.token).toBeDefined();
  });
})