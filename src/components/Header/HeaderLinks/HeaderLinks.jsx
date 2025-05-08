import { headerNavData } from "../../../data/headerNavData"
import HeaderLink from "./HeaderLink";

function HeaderLinks() {
  return (
    <nav className='header-links'>
      {headerNavData.map((props, i) => {
        const { Icon, text, href } = props;
        return <HeaderLink key={i} href={href} text={text} icon={Icon} />;
      })}
    </nav>
  );
}

export default HeaderLinks
