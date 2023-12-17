import navData from "@/helper/dataHelper/navData";

const NavButtons = (): JSX.Element => {
  const { navButtons } = navData();
  return (
    <div id="nav-buttons__container" className="d-none d-lg-flex">
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

export default NavButtons;
