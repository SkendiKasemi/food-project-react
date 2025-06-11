import Reveal from '../../components/Other/Reveal';
import { useCookLater } from '../../context/localStorageContexts';
import StorageListPage from '../StorageListPage/StorageListPage';

function CookLater() {
  return (
    <Reveal>
      <StorageListPage
        title='Cook Later'
        useStorageHook={useCookLater}
        storageKey='cookLater'
      />
    </Reveal>
  );
}

export default CookLater;
