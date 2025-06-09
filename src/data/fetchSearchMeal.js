// fetchSearchMeal.js
export const fetchSearchMeal = async (query, setData, signal) => {
  if (!query || query.length < 3) {
    setData([]);
    return;
  }
  try {
    const paths = [
      `search.php?s=${query}`, // full details
      `filter.php?c=${query}`, // only id, name, thumb
      `filter.php?a=${query}`, // only id, name, thumb
    ];

    // 1) fetch all three in parallel
    const responses = await Promise.all(
      paths.map((p) =>
        fetch(`https://www.themealdb.com/api/json/v1/1/${p}`, { signal })
      )
    );
    const jsons = await Promise.all(responses.map((r) => r.json()));

    // 2) flatten all raw meals
    const allMeals = jsons.flatMap((j) => j.meals || []);

    // 3) dedupe by idMeal
    const uniqueMeals = Array.from(
      new Map(allMeals.map((m) => [m.idMeal, m])).values()
    );

    // 4) for any meal missing category or area, fetch its full detail
    const detailed = await Promise.all(
      uniqueMeals.map(async (meal) => {
        if (meal.strCategory && meal.strArea) {
          return meal;
        }
        // otherwise, lookup by ID
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`,
          { signal }
        );
        const json = await res.json();
        return json.meals?.[0] || meal;
      })
    );

    setData(detailed);
  } catch (err) {
    if (err.name !== 'AbortError') console.error('Search error:', err);
  }
};
