# Dashboard API Spec

## Get Dashboard Today API

Endpoint : get /api/dashboard/today

Headers :
- Authorization : Bearer token

Response Body Success :

```json
{
  "success": true,
  "message": "Tantangan 7 Hari Makan Bersih",
  "data": {
    "programName" : "ff9d3593-5696-4b53-84d3-a9474cfe5317",
    "dayNumber" : 1,
    "activityDate" : "2025-06-21",
    "targetCalories" : 1500,
    "consumedCalories" : 850,
    "meals": {
      "breakfast": { "recipe_id": 3, "name": "Smoothie Hijau", "completed": true },
      "lunch": { "recipe_id": 1, "name": "Ayam Bakar Madu", "completed": true },
      "dinner": { "recipe_id": 4, "name": "Tumis Brokoli Simpel", "completed": false }
    }
  }
}
```

Response Body Error :

```json
{
  "errors" : "Unauthorized"
}
```