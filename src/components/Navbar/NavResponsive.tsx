import navData from "@/helper/dataHelper/navData";

const NavResponsive = (): JSX.Element => {
  const { menuItems, navButtons } = navData();
  return (
    <div className="menu-responsive d-lg-none">
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            {item.label} <img src={item.icon} alt="" />
          </li>
        ))}
      </ul>
      {navButtons.map((item, index) => (
        <div className="button" key={index}>
          <button className="btn" id={item.id}>
            {item.value}
          </button>
        </div>
      ))}
    </div>
  );
};

export default NavResponsive;
