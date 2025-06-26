# User API Spec

## Get User Current API

Endpoint : get /api/user/current

Deskripsi : Mendapatkan detail profil lengkap dari pengguna yang sedang login.

Headers :
- Authorization : Bearer token

Response Body Success :

```json
{
  "success": true,
  "message": "Berhasil mendapatkan data user saat ini",
  "data": {
    "id" : "ff9d3593-5696-4b53-84d3-a9474cfe5317",
    "email" : "hikmal@gmail.com",
    "password" : "$2b$10$bC89.goKr3yxbABDt9Nek.rSmI2jcoU8F1CWH4lTSXTm2Dp5klUxa",
    "first_name" : "Hikmal",
    "last_name" : "Maulana"
  }
}
```

Response Body Error :

```json
{
  "errors" : "User tidak ditemukan"
}
```

## Create Program For User

Endpoint : post /api/user/start-program

Deskripsi: Memulai program.

Headers :
- Authorization : Bearer token

Request Body :

```json
{
  "program_id": 1,
  "profile_data": {
    "height": 160,
    "weight": 65,
    "age": 28,
    "gender": "wanita",
    "activity_level": "ringan",
    "goal": "turun_bb"
  }
} 
```

Response Body Success :

```json
{
  "success": true,
  "message": "Berhasil mengikuti program",
  "program_details": {
    "userProgramId": 1,
    "programId": 1,
    "programName": "Tantangan 7 Hari Makan Bersih",
    "startDate": "2025-06-22",
    "calculatedTargetCalories": 1450
  }
}
```

Response Body Error :

```json
{
  "errors" : "Program tidak ditemukan"
}
```