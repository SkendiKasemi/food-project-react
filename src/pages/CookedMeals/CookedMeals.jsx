import Reveal from '../../components/Other/Reveal';
import { useCookedMeals } from '../../context/localStorageContexts';
import StorageListPage from '../StorageListPage/StorageListPage';

function CookedMeals() {
  return (
    <Reveal>
      <StorageListPage
        title='Cooked Meals'
        useStorageHook={useCookedMeals}
        storageKey='cookedMeals'
      />
    </Reveal>
  );
}

export default CookedMeals;
