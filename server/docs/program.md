# Program API Spec

## Get Programs API

Endpoint : get /api/program/

Deskripsi : Untuk mendapatkan semua informasi program yang ada.

Response Body Success :

```json
{
  "success": true,
  "message": "Berhasil dicatat",
  "data" : [
    { 
      "id": 1, 
      "name": "Program Tantangan Hari Makan Bersih (Clean Eating)", 
      "description": "...", 
      "cover_image_url": "...",
      "duration_days": 7
    },
    { 
      "id": 2, 
      "name": "Program Turun Berat Badan 30 Hari", 
      "description": "...", 
      "cover_image_url": "...",
      "duration_days": 7
    }
  ]
}
```

Response Body Error :

```json
{
  "errors" : "Program tidak ditemukan"
}
```

## Get Program API

Endpoint : get /api/program/:id

Deskripsi : Untuk mendapatkan informasi program berdasarkan id.

Response Body Success :

```json
{
  "success": true,
  "message": "Berhasil dicatat",
  "data" : { 
    "id": 1, 
    "name": "Program Tantangan Hari Makan Bersih (Clean Eating)", 
    "description": "...", 
    "cover_image_url": "...",
    "duration_days": 7
  }
}
```

Response Body Error :

```json
{
  "errors" : "Program tidak ditemukan"
}
```