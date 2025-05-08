export const fetchMealDataById = async (id, setLoading, setData) => {
  setLoading(true);
  if (!id) return;

  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const data = await res.json();

  setData(data.meals[0]);
  setLoading(false);
};
