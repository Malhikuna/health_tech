# Dashboard API Spec

## Get Progress API

Endpoint : post /api/progress/log-meal

Deskripsi : Untuk menandai satu jenis makanan (sarapan/siang/malam) sebagai selesai.

Headers :
- Authorization : Bearer token

Request Body :

```json
{
  "programId": 1,
  "dayNumber": 1,
  "mealType": "dinner",
  "completed": true
} 
```

Response Body Success :

```json
{
  "success": true,
  "message": "Berhasil dicatat"
}
```

Response Body Error :

```json
{
  "errors" : "Unauthorized"
}
```