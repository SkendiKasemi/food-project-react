export const fetchCategories = async (setCategories) => {
  const res = await fetch(
    'https://www.themealdb.com/api/json/v1/1/categories.php'
  );
  const data = await res.json();

  setCategories(data.categories);
};
