import MenuItems from "./Navbar/MenuItems";
import NavLogo from "./Navbar/NavLogo";
import NavButtons from "./Navbar/NavButtons";
import NavResponsive from "./Navbar/NavResponsive";
import MenuIcons from "./Navbar/MenuIcons";
import { useNav } from "@/hooks/useNav";
import Overlay from "./Navbar/Overlay";

const Navbar = (): JSX.Element => {
  const { menuToogle, openOverlay } = useNav();
  return (
    <nav id="nav">
      <div id="nav__container">
        <section id="nav-header">
          <NavLogo />
          <MenuItems />
        </section>
        <section id="nav-buttons">
          <NavButtons />
          <MenuIcons action={menuToogle} />
        </section>
      </div>
      <NavResponsive />
      <Overlay overlay={openOverlay} />
    </nav>
  );
};

export default Navbar;
