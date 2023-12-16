import MenuItems from "./Navbar/MenuItems";
import NavLogo from "./Navbar/NavLogo";
import NavButtons from "./Navbar/NavButtons";

const Navbar = (): JSX.Element => {
  return (
    <nav id="nav">
      <div id="nav__container">
        <section id="nav-header">
          <NavLogo />
          <MenuItems />
        </section>
        <section id="nav-buttons">
          <NavButtons />
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
