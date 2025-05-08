export const addItem = (meal, items, setItems) => {
  const {
    idMeal,
    strMeal: name,
    strMealThumb: image,
    strArea: area,
    strCategory: category,
  } = meal;

  const newItem = {
    id: idMeal,
    name: name,
    image: image,
    area: area,
    category: category,
  };

  const isDuplicate = items.some((item) => item.name === newItem.name);
  if (isDuplicate) {
    alert('Meal Already Added To Favorites!');
    return;
  }

  const updatedItems = [...items, newItem];
  setItems(updatedItems);
  localStorage.setItem('favorites', JSON.stringify(updatedItems));
};
