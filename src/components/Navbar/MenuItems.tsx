import navData from "@/helper/dataHelper/navData";
import { useNav } from "@/hooks/useNav";

const MenuItems = (): JSX.Element => {
  const { menuItems } = navData();
  const { menuClose } = useNav();
  return (
    <div className="menu-items d-none d-lg-flex">
      <ul>
        {menuItems.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              item.action && item.action();
              menuClose();
            }}
          >
            {item.label} <img src={item.icon} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuItems;
