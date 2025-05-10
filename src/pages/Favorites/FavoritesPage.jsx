import { useFavorites } from '../../context/localStorageContexts';
import StorageListPage from '../StorageListPage/StorageListPage';

export default function FavoritesPage() {
  return (
    <StorageListPage
      title='Favorites'
      useStorageHook={useFavorites}
      storageKey='favorites'
    />
  );
}
