import Reveal from '../../components/Other/Reveal';
import { useCookLater } from '../../context/localStorageContexts';
import StorageListPage from '../StorageListPage/StorageListPage';

const CookSVG = () => {
  return (
    <svg
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      className='empty-state-icon'
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g id='SVGRepo_tracerCarrier'></g>
      <g id='SVGRepo_iconCarrier'>
        <path d='M6 8C6 5.18536 8 4 12 4C16 4 18 5.18537 18 8V19.0858C18 19.9767 16.9229 20.4229 16.2929 19.7929L12.7071 16.2071C12.3166 15.8166 11.6834 15.8166 11.2929 16.2071L7.70711 19.7929C7.07714 20.4229 6 19.9767 6 19.0858V8Z'></path>
      </g>
    </svg>
  );
};

function CookLater() {
  return (
    <Reveal>
      <StorageListPage
        title='Cook Later'
        useStorageHook={useCookLater}
        storageKey='cookLater'
        SVG={CookSVG}
      />
    </Reveal>
  );
}

export default CookLater;
