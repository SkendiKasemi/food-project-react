import { sidebarData } from '../../data/SidebarData';
import SidebarButton from './SidebarButton/SidebarButton';
import './sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
      {sidebarData.map((el) => {
        const { Icon, href, text } = el;
        return <SidebarButton icon={Icon} key={text} foodType={text} />;
      })}
    </div>
  );
}

export default Sidebar;
