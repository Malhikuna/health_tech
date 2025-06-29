import {getProgram} from "./test-util.js";

export const recipeData = [
  {
    id: 1,
    name: "Paket Nasi & Tempe Bakar",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    instructions: "1. Haluskan {Bawang Putih}, campur dengan {Kecap Manis}.&lt;br>2. Lumuri {Tempe} dengan bumbu, diamkan 10 menit.&lt;br>3. Bakar/panggang tempe di teflon hingga matang.&lt;br>4. Sajikan dengan {Nasi Merah} hangat, {Lalapan}, dan {Sambal Tomat Rebus}.",
    image_url: "/images/ubi-kukus.jpg",
    cooking_time_minutes: 10
  },
  {
    id: 2,
    name: "Opor Ayam Sehat",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    instructions: "1. Masak Oatmeal dengan air. 2. Tambahkan potongan Pisang Ambon dan Madu Murni.",
    image_url: "/images/ubi-kukus.jpg",
    cooking_time_minutes: 10
  },
  {
    id: 3,
    name: "Sayur Bening & Tahu Kukus",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    instructions: "1. Cuci bersih {Ubi Cilembu}. 2. Kukus selama 20-30 menit hingga empuk.",
    image_url: "/images/ubi-kukus.jpg",
    cooking_time_minutes: 10
  },
  {
    id: 4,
    name: "Bubur Kacang Hijau Sehat",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    instructions: "1. Cuci bersih {Ubi Cilembu}. 2. Kukus selama 20-30 menit hingga empuk.",
    image_url: "/images/ubi-kukus.jpg",
    cooking_time_minutes: 10
  },
  {
    id: 5,
    name: "Sarapan Praktis & Padat Gizi",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    instructions: "1. Cuci bersih {Ubi Cilembu}. 2. Kukus selama 20-30 menit hingga empuk.",
    image_url: "/images/ubi-kukus.jpg",
    cooking_time_minutes: 10
  },
]

export const ingredientData = [
  // --- SUMBER PROTEIN ---
  {
    id: 1,
    name: "Dada Ayam Fillet",
    unit: "gram",
    calories_per_unit: 1.65,
    protein_per_unit: 0.31,
    carbs_per_unit: 0,
    fats_per_unit: 0.036,
  },
  {
    id: 2,
    name: "Telur Ayam",
    unit: "buah",
    calories_per_unit: 78,
    protein_per_unit: 6,
    carbs_per_unit: 0.6,
    fats_per_unit: 5,
  },
  {
    id: 3,
    name: "Tempe",
    unit: "gram",
    calories_per_unit: 1.93,
    protein_per_unit: 0.2,
    carbs_per_unit: 0.08,
    fats_per_unit: 0.11,
  },
  {
    id: 4,
    name: "Tahu Putih Sutra",
    unit: "gram",
    calories_per_unit: 0.8,
    protein_per_unit: 0.08,
    carbs_per_unit: 0.02,
    fats_per_unit: 0.05,
  },
  {
    id: 5,
    name: "Ikan Kembung",
    unit: "gram",
    calories_per_unit: 1.25,
    protein_per_unit: 0.21,
    carbs_per_unit: 0,
    fats_per_unit: 0.04,
  },

  // --- SUMBER KARBOHIDRAT ---
  {
    id: 6,
    name: "Nasi Merah (matang)",
    unit: "gram",
    calories_per_unit: 1.11,
    protein_per_unit: 0.026,
    carbs_per_unit: 0.23,
    fats_per_unit: 0.009,
  },
  {
    id: 7,
    name: "Roti Gandum",
    unit: "lembar",
    calories_per_unit: 80,
    protein_per_unit: 3.6,
    carbs_per_unit: 13.8,
    fats_per_unit: 1.1,
  },
  {
    id: 8,
    name: "Pisang Ambon",
    unit: "buah",
    calories_per_unit: 105,
    protein_per_unit: 1.3,
    carbs_per_unit: 27,
    fats_per_unit: 0.4,
  },
  {
    id: 9,
    name: "Ubi Cilembu (kukus)",
    unit: "gram",
    calories_per_unit: 0.86,
    protein_per_unit: 0.016,
    carbs_per_unit: 0.2,
    fats_per_unit: 0.001,
  },
  {
    id: 10,
    name: "Oatmeal (rolled, kering)",
    unit: "gram",
    calories_per_unit: 3.89,
    protein_per_unit: 0.17,
    carbs_per_unit: 0.66,
    fats_per_unit: 0.07,
  },
  {
    id: 11,
    name: "Kacang Hijau (kering)",
    unit: "gram",
    calories_per_unit: 3.47,
    protein_per_unit: 0.24,
    carbs_per_unit: 0.63,
    fats_per_unit: 0.01,
  },

  // --- SAYURAN ---
  {
    id: 12,
    name: "Brokoli",
    unit: "gram",
    calories_per_unit: 0.34,
    protein_per_unit: 0.028,
    carbs_per_unit: 0.07,
    fats_per_unit: 0.004,
  },
  {
    id: 13,
    name: "Daun Bayam",
    unit: "gram",
    calories_per_unit: 0.23,
    protein_per_unit: 0.029,
    carbs_per_unit: 0.036,
    fats_per_unit: 0.004,
  },
  {
    id: 14,
    name: "Lalapan (Timun, Selada)",
    unit: "gram",
    calories_per_unit: 0.15,
    protein_per_unit: 0.007,
    carbs_per_unit: 0.03,
    fats_per_unit: 0.001,
  },
  {
    id: 15,
    name: "Jagung Manis (pipil)",
    unit: "gram",
    calories_per_unit: 0.86,
    protein_per_unit: 0.032,
    carbs_per_unit: 0.19,
    fats_per_unit: 0.012,
  },

  // --- BUMBU & LAIN-LAIN ---
  {
    id: 16,
    name: "Bawang Putih",
    unit: "siung",
    calories_per_unit: 5,
    protein_per_unit: 0.2,
    carbs_per_unit: 1,
    fats_per_unit: 0,
  },
  {
    id: 17,
    name: "Madu Murni",
    unit: "gram",
    calories_per_unit: 3.04,
    protein_per_unit: 0.003,
    carbs_per_unit: 0.82,
    fats_per_unit: 0,
  },
  {
    id: 18,
    name: "Kecap Manis",
    unit: "ml",
    calories_per_unit: 3.75,
    protein_per_unit: 0.05,
    carbs_per_unit: 0.9,
    fats_per_unit: 0,
  },
  {
    id: 19,
    name: "Sambal Tomat Rebus",
    unit: "sdm",
    calories_per_unit: 10,
    protein_per_unit: 0.2,
    carbs_per_unit: 2,
    fats_per_unit: 0.1,
  },
  {
    id: 20,
    name: "Kemiri",
    unit: "butir",
    calories_per_unit: 25,
    protein_per_unit: 0.6,
    carbs_per_unit: 0.9,
    fats_per_unit: 2.1,
  },
  {
    id: 21,
    name: "Sereh",
    unit: "batang",
    calories_per_unit: 5,
    protein_per_unit: 0.1,
    carbs_per_unit: 1.2,
    fats_per_unit: 0,
  },
  {
    id: 22,
    name: "Daun Salam",
    unit: "lembar",
    calories_per_unit: 1,
    protein_per_unit: 0,
    carbs_per_unit: 0.2,
    fats_per_unit: 0,
  },
  {
    id: 23,
    name: "Gula Aren",
    unit: "gram",
    calories_per_unit: 3.86,
    protein_per_unit: 0,
    carbs_per_unit: 0.95,
    fats_per_unit: 0,
  },
  {
    id: 24,
    name: "Jahe",
    unit: "gram",
    calories_per_unit: 0.8,
    protein_per_unit: 0.018,
    carbs_per_unit: 0.18,
    fats_per_unit: 0.008,
  },
  {
    id: 25,
    name: "Minyak Zaitun",
    unit: "ml",
    calories_per_unit: 8.84,
    protein_per_unit: 0,
    carbs_per_unit: 0,
    fats_per_unit: 0.99,
  },
];

export const recipeIngredientsData = [
  // --- Resep ID: 1 - Paket Nasi & Tempe Bakar ---
  {
    recipe_id: 1,
    ingredient_id: 6, // Nasi Merah (matang)
    base_quantity: 100,
  },
  {
    recipe_id: 1,
    ingredient_id: 3, // Tempe
    base_quantity: 80,
  },
  {
    recipe_id: 1,
    ingredient_id: 18, // Kecap Manis
    base_quantity: 15, // dalam ml
  },
  {
    recipe_id: 1,
    ingredient_id: 16, // Bawang Putih
    base_quantity: 2, // dalam siung
  },
  {
    recipe_id: 1,
    ingredient_id: 14, // Lalapan (Timun, Selada)
    base_quantity: 50,
  },
  {
    recipe_id: 1,
    ingredient_id: 19, // Sambal Tomat Rebus
    base_quantity: 1, // dalam sdm
  },

  // --- Resep ID: 2 - Opor Ayam Sehat ---
  {
    recipe_id: 2,
    ingredient_id: 1, // Dada Ayam Fillet
    base_quantity: 100,
  },
  {
    recipe_id: 2,
    ingredient_id: 6, // Nasi Merah (matang)
    base_quantity: 100,
  },
  {
    recipe_id: 2,
    ingredient_id: 20, // Kemiri
    base_quantity: 3,
  },
  {
    recipe_id: 2,
    ingredient_id: 16, // Bawang Putih
    base_quantity: 2,
  },
  {
    recipe_id: 2,
    ingredient_id: 21, // Sereh
    base_quantity: 1,
  },
  {
    recipe_id: 2,
    ingredient_id: 22, // Daun Salam
    base_quantity: 1,
  },

  // --- Resep ID: 3 - Sayur Bening & Tahu Kukus ---
  {
    recipe_id: 3,
    ingredient_id: 13, // Daun Bayam
    base_quantity: 75,
  },
  {
    recipe_id: 3,
    ingredient_id: 15, // Jagung Manis (pipil)
    base_quantity: 50,
  },
  {
    recipe_id: 3,
    ingredient_id: 4, // Tahu Putih Sutra
    base_quantity: 100,
  },

  // --- Resep ID: 4 - Bubur Kacang Hijau Sehat ---
  {
    recipe_id: 4,
    ingredient_id: 11, // Kacang Hijau (kering)
    base_quantity: 50,
  },
  {
    recipe_id: 4,
    ingredient_id: 23, // Gula Aren
    base_quantity: 15,
  },
  {
    recipe_id: 4,
    ingredient_id: 24, // Jahe
    base_quantity: 10,
  },

  // --- Resep ID: 5 - Sarapan Praktis & Padat Gizi ---
  {
    recipe_id: 5,
    ingredient_id: 2, // Telur Ayam
    base_quantity: 2,
  },
  {
    recipe_id: 5,
    ingredient_id: 8, // Pisang Ambon
    base_quantity: 1,
  },
];

export const dailyPlanData = async () => {
  const {id} = await getProgram();

  return [
    // --- JADWAL UNTUK PROGRAM ID: 3 (Tantangan 7 Hari Makan Bersih) ---

    // Hari ke-1
    {
      program_id: id,
      day_number: 1,
      breakfast_recipe_id: 5, // Sarapan Praktis & Padat Gizi
      lunch_recipe_id: 1,     // Paket Nasi & Tempe Bakar
      dinner_recipe_id: 3,      // Sayur Bening & Tahu Kukus
    },
    // Hari ke-2
    {
      program_id: id,
      day_number: 2,
      breakfast_recipe_id: 4, // Bubur Kacang Hijau Sehat
      lunch_recipe_id: 2,     // Opor Ayam Sehat
      dinner_recipe_id: 3,      // Sayur Bening & Tahu Kukus
    },
    // Hari ke-3
    {
      program_id: id,
      day_number: 3,
      breakfast_recipe_id: 5, // Sarapan Praktis & Padat Gizi
      lunch_recipe_id: 1,     // Paket Nasi & Tempe Bakar
      dinner_recipe_id: 2,      // Opor Ayam Sehat
    },
    // Hari ke-4
    {
      program_id: id,
      day_number: 4,
      breakfast_recipe_id: 4, // Bubur Kacang Hijau Sehat
      lunch_recipe_id: 2,     // Opor Ayam Sehat
      dinner_recipe_id: 3,      // Sayur Bening & Tahu Kukus
    },
    // Hari ke-5
    {
      program_id: id,
      day_number: 5,
      breakfast_recipe_id: 5, // Sarapan Praktis & Padat Gizi
      lunch_recipe_id: 1,     // Paket Nasi & Tempe Bakar
      dinner_recipe_id: 2,      // Opor Ayam Sehat
    },
    // Hari ke-6
    {
      program_id: id,
      day_number: 6,
      breakfast_recipe_id: 4, // Bubur Kacang Hijau Sehat
      lunch_recipe_id: 2,     // Opor Ayam Sehat
      dinner_recipe_id: 3,      // Sayur Bening & Tahu Kukus
    },
    // Hari ke-7
    {
      program_id: id,
      day_number: 7,
      breakfast_recipe_id: 5, // Sarapan Praktis & Padat Gizi
      lunch_recipe_id: 1,     // Paket Nasi & Tempe Bakar
      dinner_recipe_id: 2,      // Opor Ayam Sehat
    },
  ]
}