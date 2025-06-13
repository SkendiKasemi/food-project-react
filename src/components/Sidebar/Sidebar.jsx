import { useOtherDishesPage } from '../../context/OtherDishesPageContext';
import { sidebarData } from '../../data/SidebarData';
import SidebarButton from './SidebarButton/SidebarButton';
import './sidebar.css';

function Sidebar() {
  const { categories } = useOtherDishesPage();
  console.log(categories);

  return (
    <div className='sidebar'>
      {sidebarData.map((el) => {
        const { Icon, category } = el;
        return <SidebarButton icon={Icon} key={category} foodType={category} />;
      })}
    </div>
  );
}

export default Sidebar;