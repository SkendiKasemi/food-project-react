import { Link } from 'react-router-dom';

function SidebarButton({ icon, foodType }) {
  return (
    <Link to={`/food-type/${foodType.toLowerCase()}`} className='link sidebar-buttons'>
      {icon}
      <span>{foodType}</span>
    </Link>
  );
}

export default SidebarButton;
