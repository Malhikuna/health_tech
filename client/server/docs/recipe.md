# Recipe API Spec

## Get Recipe API

Endpoint : get /api/recipe/:id

Deskripsi : Untuk mendapatkan detail resep makanan.

Headers :
- Authorization : Bearer token

Response Body Success :

```json
{
  "id": 1,
  "name": "Ayam Bakar Madu",
  "calculated_calories": 500,
  "ingredients": [
    { "name": "Dada Ayam Fillet", "quantity": 110, "unit": "gram" }
  ],
  "instructions": "1. Lumuri 110 gram Dada Ayam Fillet..."
}
```

Response Body Error :

```json
{
  "errors" : "Unauthorized"
}
```