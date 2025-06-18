import { NavLink } from 'react-router-dom';
import { useOnScreen } from '../../Other/useOnScreen';

export default function SidebarButton({ icon, foodType }) {
  const [ref, isVisible] = useOnScreen({ rootMargin: '0px', threshold: 0.1 });

  return (
    <NavLink
      to={`/other-dishes/${foodType}`}
      ref={ref}
      className={`link sidebar-buttons ${
        isVisible ? 'in-view' : 'out-of-view'
      }`}
    >
      {icon}
      <span>{foodType}</span>
    </NavLink>
  );
}
