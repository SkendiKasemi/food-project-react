import { useCookLater } from '../../context/localStorageContexts';
import StorageListPage from '../StorageListPage/StorageListPage';

function CookLater() {
  return (
    <StorageListPage
      title='Cook Later'
      useStorageHook={useCookLater}
      storageKey='favorites'
    />
  );
}

export default CookLater;
