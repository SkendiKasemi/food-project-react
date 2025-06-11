import Reveal from '../../components/Other/Reveal';
import { useFavorites } from '../../context/localStorageContexts';
import StorageListPage from '../StorageListPage/StorageListPage';

export default function FavoritesPage() {
  return (
    <Reveal>
      <StorageListPage
        title='Favorites'
        useStorageHook={useFavorites}
        storageKey='favorites'
      />
    </Reveal>
  );
}
