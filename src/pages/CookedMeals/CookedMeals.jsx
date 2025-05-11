import { useCookedMeals } from '../../context/localStorageContexts';
import StorageListPage from '../StorageListPage/StorageListPage';

function CookedMeals() {
  return (
    <StorageListPage
      title='Cooked Meals'
      useStorageHook={useCookedMeals}
      storageKey='cookedMeals'
    />
  );
}

export default CookedMeals;
