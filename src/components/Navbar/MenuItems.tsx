import navData from "@/helper/dataHelper/navData";

const MenuItems = (): JSX.Element => {
  const { menuItems } = navData();
  return (
    <div className="menu-items">
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            {item.label} <img src={item.icon} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuItems;
