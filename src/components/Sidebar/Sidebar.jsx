import { sidebarData } from '../../data/SidebarData';
import SidebarButton from './SidebarButton/SidebarButton';
import './sidebar.css';

function Sidebar() {

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