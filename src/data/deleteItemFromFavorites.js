export function deleteItemByIdFromLocalStorage(
  storageKey,
  idToDelete,
  name,
  setItems
) {
  const data = JSON.parse(localStorage.getItem(storageKey)) || [];

  const updatedData = data.filter((item) => item.id !== idToDelete);

  localStorage.setItem(storageKey, JSON.stringify(updatedData));
  setItems(updatedData);

}
