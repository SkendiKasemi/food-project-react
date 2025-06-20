import toast from 'react-hot-toast';

export const addItem = (meal, items, setItems, storePlace) => {
  const {
    idMeal,
    strMeal: name,
    strMealThumb: image,
    strArea: area,
    strCategory: category,
  } = meal;

  const newItem = { id: idMeal, name, image, area, category };
  const isDuplicate = items.some((item) => item.id === newItem.id);

  if (isDuplicate) {
    toast.error(`“${name}” is already in your ${storePlace}!`, {
      duration: 3000,
    });
    return;
  }

  const updatedItems = [...items, newItem];
  setItems(updatedItems);
  localStorage.setItem(storePlace, JSON.stringify(updatedItems));

  toast.success(`“${name}” added to ${storePlace}!`, {
    duration: 3000,
  });
};
