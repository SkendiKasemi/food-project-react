export const getIngredientsWithMeasures = (mealData) => {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = mealData[`strIngredient${i}`];
    const measure = mealData[`strMeasure${i}`];

    if (
      ingredient &&
      ingredient.trim() !== '' &&
      measure &&
      measure.trim() !== ''
    ) {
      ingredients.push(`${measure.trim()} ${ingredient.trim()}`);
    }
  }

  return ingredients;
};
