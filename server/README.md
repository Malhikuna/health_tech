## Set Up Server / Backend

## Langkah-langkah

- Install depedency

```shell
  npm install
```

- Bikin Database MySql Dengan Nama health_tech

- Bikin file .env di health_tech/server

```dotenv
  DATABASE_URL="mysql://root:@localhost:3306/health_tech"

  JWT_SECRET="secret"
  JWT_EXPIRES_IN="1D"
```
- Jalankan Database
- Generate Prisma
    
```shell
  npx prisma migrate dev --name init

```

- Run

```shell
  npm run dev 
```