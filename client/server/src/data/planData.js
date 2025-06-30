/**
 * Data awal untuk resep, komposisi resep, dan jadwal harian.
 */

export const recipesData = [
  { id: 1, name: 'Paket Nasi & Tempe Bakar', description: 'Kombinasi protein nabati dari tempe dengan karbohidrat kompleks dari nasi merah...', instructions_template: '1. Haluskan {Bawang Putih}, campur dengan {Kecap Manis}.<br>2. Lumuri {Tempe} dengan bumbu...', image_url: '/images/tempe-bakar.jpg', cooking_time_minutes: 25 },
  { id: 2, name: 'Opor Ayam Sehat (Tanpa Santan)', description: 'Versi lebih sehat dari opor tradisional...', instructions_template: '1. Tumis bumbu halus ({Kemiri}, {Bawang Putih}) hingga harum...', image_url: '/images/opor-sehat.jpg', cooking_time_minutes: 35 },
  { id: 3, name: 'Sayur Bening Bayam & Tahu Kukus', description: 'Makanan rumahan yang ringan, kaya serat dan nutrisi...', instructions_template: '1. Didihkan air, masukkan irisan bawang & temu kunci...', image_url: '/images/sayur-bening.jpg', cooking_time_minutes: 15 },
  { id: 4, name: 'Bubur Kacang Hijau Sehat', description: 'Sarapan hangat penuh serat dan energi...', instructions_template: '1. Rebus {Kacang Hijau} dengan daun pandan dan {Jahe} hingga empuk...', image_url: '/images/bubur-kacang.jpg', cooking_time_minutes: 45 },
  { id: 5, name: 'Sarapan Praktis Padat Gizi', description: 'Solusi sarapan super cepat di hari sibuk...', instructions_template: '1. Rebus {Telur Ayam} hingga matang.<br>2. Sajikan dengan {Pisang Ambon}.', image_url: '/images/pisang-telur.jpg', cooking_time_minutes: 10 },
  { id: 6, name: 'Tahu Orak-Arik Sayur', description: 'Menu sarapan atau makan malam tinggi protein nabati dan serat...', instructions_template: '1. Hancurkan {Tahu Putih Sutra}.<br>2. Tumis {Bawang Putih}, masukkan {Telur Ayam}, orak-arik...', image_url: '/images/tahu-orak-arik.jpg', cooking_time_minutes: 15 },
  { id: 7, name: 'Paket Soto Ayam Bening', description: 'Soto ayam versi ringan dan segar tanpa santan...', instructions_template: '1. Rebus {Dada Ayam Fillet} hingga matang, suwir-suwir...', image_url: '/images/soto-bening.jpg', cooking_time_minutes: 40 },
  { id: 8, name: 'Paket Urap Sayuran & Tempe', description: 'Salad tradisional Indonesia yang kaya rasa dan serat...', instructions_template: '1. Kukus semua sayuran ({Daun Bayam}, {Tauge}, {Buncis})...', image_url: '/images/urap-sayur.jpg', cooking_time_minutes: 30 },
  { id: 9, name: 'Roti Gandum Selai Kacang & Pisang', description: 'Sarapan ala barat yang praktis...', instructions_template: '1. Panggang {Roti Gandum}.<br>2. Oleskan {Selai Kacang (alami)}...', image_url: '/images/roti-selai.jpg', cooking_time_minutes: 5 },
];

export const recipeIngredientsData = [
  // --- Resep ID: 1 - Paket Nasi & Tempe Bakar ---
  { recipe_id: 1, ingredient_id: 6, base_quantity: 100 },
  { recipe_id: 1, ingredient_id: 3, base_quantity: 80 },
  { recipe_id: 1, ingredient_id: 18, base_quantity: 15 },
  { recipe_id: 1, ingredient_id: 16, base_quantity: 2 },
  { recipe_id: 1, ingredient_id: 14, base_quantity: 50 },
  { recipe_id: 1, ingredient_id: 19, base_quantity: 1 },

  // --- Resep ID: 2 - Opor Ayam Sehat ---
  { recipe_id: 2, ingredient_id: 1, base_quantity: 100 },
  { recipe_id: 2, ingredient_id: 6, base_quantity: 100 },
  { recipe_id: 2, ingredient_id: 20, base_quantity: 3 },
  { recipe_id: 2, ingredient_id: 16, base_quantity: 2 },
  { recipe_id: 2, ingredient_id: 21, base_quantity: 1 },
  { recipe_id: 2, ingredient_id: 22, base_quantity: 1 },

  // --- Resep ID: 3 - Sayur Bening & Tahu Kukus ---
  { recipe_id: 3, ingredient_id: 13, base_quantity: 75 },
  { recipe_id: 3, ingredient_id: 15, base_quantity: 50 },
  { recipe_id: 3, ingredient_id: 4, base_quantity: 100 },

  // --- Resep ID: 4 - Bubur Kacang Hijau Sehat ---
  { recipe_id: 4, ingredient_id: 11, base_quantity: 50 },
  { recipe_id: 4, ingredient_id: 23, base_quantity: 15 },
  { recipe_id: 4, ingredient_id: 24, base_quantity: 10 },

  // --- Resep ID: 5 - Sarapan Praktis & Padat Gizi ---
  { recipe_id: 5, ingredient_id: 2, base_quantity: 2 },
  { recipe_id: 5, ingredient_id: 8, base_quantity: 1 },

  // --- Resep ID: 6 - Tahu Orak-Arik Sayur ---
  { recipe_id: 6, ingredient_id: 4, base_quantity: 150 },
  { recipe_id: 6, ingredient_id: 2, base_quantity: 1 },
  { recipe_id: 6, ingredient_id: 26, base_quantity: 50 },
  { recipe_id: 6, ingredient_id: 16, base_quantity: 2 },

  // --- Resep ID: 7 - Paket Soto Ayam Bening ---
  { recipe_id: 7, ingredient_id: 1, base_quantity: 100 },
  { recipe_id: 7, ingredient_id: 6, base_quantity: 100 },
  { recipe_id: 7, ingredient_id: 26, base_quantity: 30 },

  // --- Resep ID: 8 - Paket Urap Sayuran & Tempe ---
  { recipe_id: 8, ingredient_id: 3, base_quantity: 80 },
  { recipe_id: 8, ingredient_id: 6, base_quantity: 100 },
  { recipe_id: 8, ingredient_id: 31, base_quantity: 2 },
  { recipe_id: 8, ingredient_id: 27, base_quantity: 50 },
  { recipe_id: 8, ingredient_id: 13, base_quantity: 50 },

  // --- Resep ID: 9 - Roti Gandum Selai Kacang & Pisang ---
  { recipe_id: 9, ingredient_id: 7, base_quantity: 2 },
  { recipe_id: 9, ingredient_id: 30, base_quantity: 15 },
  { recipe_id: 9, ingredient_id: 8, base_quantity: 0.5 },
];

export const dailyPlanData = [
  // --- JADWAL UNTUK PROGRAM ID: 1 (Tantangan 7 Hari Makan Bersih) ---
  // --- JADWAL UNTUK PROGRAM ID: 397b9bed-6387-4d5b-83aa-093de91a0524 (Clean Eating) ---
  {
    id: '7a3e7782-7e11-4e3a-94d5-ab52ec373a4f',
    program_id: '397b9bed-6387-4d5b-83aa-093de91a0524',
    day_number: 1,
    breakfast_recipe_id: 5,
    lunch_recipe_id: 1,
    dinner_recipe_id: 3,
  },
  {
    id: '0495dc59-2c26-40ea-bf29-cf2ce83a462c',
    program_id: '397b9bed-6387-4d5b-83aa-093de91a0524',
    day_number: 2,
    breakfast_recipe_id: 4,
    lunch_recipe_id: 2,
    dinner_recipe_id: 3,
  },
  {
    id: '678c8aaa-825c-407a-9786-7bd7e504c568',
    program_id: '397b9bed-6387-4d5b-83aa-093de91a0524',
    day_number: 3,
    breakfast_recipe_id: 5,
    lunch_recipe_id: 1,
    dinner_recipe_id: 2,
  },
  {
    id: '1efc27fa-db59-40c0-bd76-eea83bc55ec8',
    program_id: '397b9bed-6387-4d5b-83aa-093de91a0524',
    day_number: 4,
    breakfast_recipe_id: 4,
    lunch_recipe_id: 2,
    dinner_recipe_id: 3,
  },
  {
    id: 'c56d87c4-473b-413d-9472-e6bf14843041',
    program_id: '397b9bed-6387-4d5b-83aa-093de91a0524',
    day_number: 5,
    breakfast_recipe_id: 5,
    lunch_recipe_id: 1,
    dinner_recipe_id: 2,
  },
  {
    id: '55c2a4ec-48be-41cd-993e-8398bb198f32',
    program_id: '397b9bed-6387-4d5b-83aa-093de91a0524',
    day_number: 6,
    breakfast_recipe_id: 4,
    lunch_recipe_id: 2,
    dinner_recipe_id: 3,
  },
  {
    id: 'c46c5c3b-a0c2-4c0a-af3a-a90bfa19608d',
    program_id: '397b9bed-6387-4d5b-83aa-093de91a0524',
    day_number: 7,
    breakfast_recipe_id: 5,
    lunch_recipe_id: 1,
    dinner_recipe_id: 2,
  },

  // --- JADWAL UNTUK PROGRAM ID: 7c7591cd-3c57-4b43-8aca-8cdd87f3ad6b (Turun Berat Badan) ---
  {
    id: '2bab6cb1-3026-4a62-9561-f7a6da9bf335',
    program_id: '7c7591cd-3c57-4b43-8aca-8cdd87f3ad6b',
    day_number: 1,
    breakfast_recipe_id: 9,
    lunch_recipe_id: 7,
    dinner_recipe_id: 3,
  },
  {
    id: '9e203196-1ce6-4e85-aa69-8978ec71ebec',
    program_id: '7c7591cd-3c57-4b43-8aca-8cdd87f3ad6b',
    day_number: 2,
    breakfast_recipe_id: 6,
    lunch_recipe_id: 1,
    dinner_recipe_id: 8,
  },
  {
    id: '9b49363d-d423-46de-9f5d-400b5c5f43c0',
    program_id: '7c7591cd-3c57-4b43-8aca-8cdd87f3ad6b',
    day_number: 3,
    breakfast_recipe_id: 9,
    lunch_recipe_id: 2,
    dinner_recipe_id: 3,
  },
  {
    id: '495dc493-5a00-4bfc-8590-8260189376c2',
    program_id: '7c7591cd-3c57-4b43-8aca-8cdd87f3ad6b',
    day_number: 4,
    breakfast_recipe_id: 6,
    lunch_recipe_id: 7,
    dinner_recipe_id: 1,
  },
  {
    id: '2ea17fe5-2c96-4eba-add4-9e5ec7d6c8d6',
    program_id: '7c7591cd-3c57-4b43-8aca-8cdd87f3ad6b',
    day_number: 5,
    breakfast_recipe_id: 9,
    lunch_recipe_id: 8,
    dinner_recipe_id: 2,
  },
  {
    id: '88d3d0cd-5d6f-4446-a767-1ce61dbfe7ce',
    program_id: '7c7591cd-3c57-4b43-8aca-8cdd87f3ad6b',
    day_number: 6,
    breakfast_recipe_id: 6,
    lunch_recipe_id: 1,
    dinner_recipe_id: 7,
  },
  {
    id: '2da7c3e9-ac8d-407c-8bcd-943c6a0e3943',
    program_id: '7c7591cd-3c57-4b43-8aca-8cdd87f3ad6b',
    day_number: 7,
    breakfast_recipe_id: 9,
    lunch_recipe_id: 2,
    dinner_recipe_id: 8,
  },
];