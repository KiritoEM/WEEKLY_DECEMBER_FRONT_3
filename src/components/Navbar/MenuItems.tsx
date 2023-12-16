import navData from "@/helper/dataHelper/navData";

const MenuItems = (): JSX.Element => {
  const { menuItems } = navData();
  return (
    <div className="menu-items">
      <ul>
        {menuItems.map((item, index) => (
          <li>{item.label}</li>
        ))}
      </ul>
    </div>
  );
};

export default MenuItems;
