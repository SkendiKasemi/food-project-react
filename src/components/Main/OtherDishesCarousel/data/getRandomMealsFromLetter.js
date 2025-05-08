const getRandomLetter = () => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return alphabet[Math.floor(Math.random() * alphabet.length)];
};

export const getRandomMealsFromLetter = async (desiredCount = 10) => {
  const selectedMeals = [];
  const attemptsLimit = 5;

  while (selectedMeals.length < desiredCount) {
    const randomLetter = getRandomLetter();
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${randomLetter}`
    );
    const data = await res.json();

    if (!data.meals || data.meals.length === 0) continue;

    const pool = [...data.meals];
    let attempts = 0;

    while (
      pool.length > 0 &&
      selectedMeals.length < desiredCount &&
      attempts < attemptsLimit
    ) {
      const index = Math.floor(Math.random() * pool.length);
      const meal = pool.splice(index, 1)[0];

      if (!selectedMeals.some((m) => m.idMeal === meal.idMeal)) {
        selectedMeals.push(meal);
      }

      attempts++;
    }
  }

  return selectedMeals;
};
