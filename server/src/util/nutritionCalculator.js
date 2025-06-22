export const calculateTargets = (profileData) => {
  const { gender, weight, height, age, activity_level, goal } = profileData;

  // Implementasi rumus Harris-Benedict atau Mifflin-St Jeor untuk BMR
  let bmr;
  if (gender === 'pria') {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else { // wanita
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  // Tentukan faktor aktivitas
  let activityFactor = 1.2; // Jarang bergerak
  if (activity_level === 'ringan') activityFactor = 1.375;
  if (activity_level === 'sedang') activityFactor = 1.55;
  if (activity_level === 'aktif') activityFactor = 1.725;

  const tdee = bmr * activityFactor;

  // Tentukan target kalori berdasarkan tujuan
  let targetCalories;
  if (goal === 'turun_bb') {
    targetCalories = tdee - 400; // Defisit 400 kkal
  } else if (goal === 'naik_bb') {
    targetCalories = tdee + 400; // Surplus 400 kkal
  } else { // jaga_bb
    targetCalories = tdee;
  }

  return {
    targetCalories: Math.round(targetCalories),
    tdee: Math.round(tdee),
    bmr: Math.round(bmr),
  };
}