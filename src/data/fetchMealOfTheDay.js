export const fetchMealOfTheDay = async (setMealOfDay) => {
  const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

  const cached = localStorage.getItem('dishOfTheDay');
  if (cached) {
    const parsed = JSON.parse(cached);
    if (parsed.date === today) {
      setMealOfDay(parsed.meal);
      return;
    }
  }

  const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
  const data = await res.json();
  const meal = data.meals[0];

  setMealOfDay(meal);
  localStorage.setItem('dishOfTheDay', JSON.stringify({ date: today, meal }));
};
