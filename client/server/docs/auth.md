# Auth API Spec

## Register User API

Endpoint : post /api/auth/register

Deskripsi : Mendaftarkan pengguna baru.

Request Body :

```json
{
  "email" : "Hikmal@gmail.com",
  "password" : "rahasia",
  "first_name" : "Hikmal",
  "last_name" : "Maulana"
}
```

Response Body Success :

```json
{
  "success": true,
  "message": "Registrasi berhasil",
  "data": {
    "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmZjlkMzU5My01Njk2LTRiNTMtODRkMy1hOTQ3NGNmZTUzMTciLCJpYXQiOjE3NTA1MTkyODQsImV4cCI6MTc1MDYwNTY4NH0.L7iiZPc43Uvsna_wID3nBwqP2lsC-6_I4cqNVDB2bGo",
    "user": {
      "id" : "ff9d3593-5696-4b53-84d3-a9474cfe5317",
      "email" : "hikmal@gmail.com",
      "password" : "$2b$10$bC89.goKr3yxbABDt9Nek.rSmI2jcoU8F1CWH4lTSXTm2Dp5klUxa",
      "first_name" : "Hikmal",
      "last_name" : "Maulana"
    }
  }
}
```

Response Body Error :

```json
{
  "errors" : "Email sudah terpakai"
}
```

## Login User API

Endpoint : post /api/auth/login

Deskripsi: Login pengguna yang sudah terdaftar.

Request Body :

```json
{
  "email" : "Hikmal@gmail.com",
  "password" : "rahasia"
}
```
Response Body Success :

```json
{
  "success": true,
  "message": "Login berhasil",
  "data": {
    "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmZjlkMzU5My01Njk2LTRiNTMtODRkMy1hOTQ3NGNmZTUzMTciLCJpYXQiOjE3NTA1MTkyODQsImV4cCI6MTc1MDYwNTY4NH0.L7iiZPc43Uvsna_wID3nBwqP2lsC-6_I4cqNVDB2bGo",
    "user": {
      "id" : "ff9d3593-5696-4b53-84d3-a9474cfe5317",
      "email" : "hikmal@gmail.com",
      "password" : "$2b$10$bC89.goKr3yxbABDt9Nek.rSmI2jcoU8F1CWH4lTSXTm2Dp5klUxa",
      "first_name" : "Hikmal",
      "last_name" : "Maulana"
    }
  }
}
```

Response Body Error :

```json
{
  "errors" : "Username atau password salah"
}
```
## Logout User API

Endpoint : post /api/auth/logout

Response Body Success :

```json
{
  "success": true,
  "message": "Logout berhasil"
}
```