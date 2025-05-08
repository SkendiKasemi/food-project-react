import { Link } from 'react-router-dom';
import LogoSVG from '../../svg/LogoSVG';

function Logo() {
  return (
    <Link to={'/'} className='logo'>
      <LogoSVG />
    </Link>
  );
}

export default Logo;
