import navData from "@/helper/dataHelper/navData";
import { useNav } from "@/hooks/useNav";

const NavButtons = (): JSX.Element => {
  const { navButtons } = navData();
  const { menuClose } = useNav();
  return (
    <div id="nav-buttons__container" className="d-none d-lg-flex">
      {navButtons.map((item, index) => (
        <div className="button" key={index}>
          <button
            className="btn"
            id={item.id}
            onClick={() => {
              item.action && item.action();
              menuClose();
            }}
          >
            {item.value}
          </button>
        </div>
      ))}
    </div>
  );
};

export default NavButtons;
