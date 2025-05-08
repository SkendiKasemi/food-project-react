import HeaderLinks from './HeaderLinks/HeaderLinks';
import Logo from './Logo/Logo';
import './header.css';

function Header() {
  return (
    <header className='header'>
      <Logo />
      <HeaderLinks />
    </header>
  );
}

export default Header;
