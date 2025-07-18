import Reveal from '../../components/Other/Reveal';
import { useCookedMeals } from '../../context/localStorageContexts';
import StorageListPage from '../StorageListPage/StorageListPage';

const CookedSVG = () => {
  return <svg
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    stroke=''
    className='empty-state-icon'
  >
    <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
    <g
      id='SVGRepo_tracerCarrier'
      stroke-linecap='round'
      stroke-linejoin='round'
    ></g>
    <g id='SVGRepo_iconCarrier'>
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M2 10C2 7.23858 4.23858 5 7 5C7.25052 5 7.49673 5.01842 7.73736 5.05399C8.33961 3.27806 10.0206 2 12 2C13.9794 2 15.6604 3.27806 16.2626 5.05399C16.5033 5.01842 16.7495 5 17 5C19.7614 5 22 7.23858 22 10C22 12.0503 20.7659 13.8124 19 14.584L19 18C19 19.8856 19 20.8284 18.4142 21.4142C17.8284 22 16.8856 22 15 22H9C7.11438 22 6.17157 22 5.58579 21.4142C5 20.8284 5 19.8856 5 18V14.584C3.2341 13.8124 2 12.0503 2 10ZM9 17.25C8.58579 17.25 8.25 17.5858 8.25 18C8.25 18.4142 8.58579 18.75 9 18.75H15C15.4142 18.75 15.75 18.4142 15.75 18C15.75 17.5858 15.4142 17.25 15 17.25H9Z'
        className='empty-state-icon'
      ></path>
    </g>
  </svg>;
};

function CookedMeals() {
  return (
    <Reveal>
      <StorageListPage
        title='Cooked Meals'
        useStorageHook={useCookedMeals}
        storageKey='cookedMeals'
        SVG={CookedSVG}
      />
    </Reveal>
  );
}

export default CookedMeals;
