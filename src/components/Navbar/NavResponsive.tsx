import navData from "@/helper/dataHelper/navData";
import { useNav } from "@/hooks/useNav";

const NavResponsive = (): JSX.Element => {
  const { menuItems, navButtons } = navData();
  const { openMenu } = useNav();
  return (
    <div
      className={`menu-responsive d-lg-none ${
        openMenu ? "open-menu" : "close-menu"
      }`}
    >
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            {item.label} <img src={item.icon} alt="" />
          </li>
        ))}
      </ul>
      <div id="nav-buttons">
        {navButtons.map((item, index) => (
          <div className="button" key={index}>
            <button className="btn" id={item.id}>
              {item.value}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavResponsive;
