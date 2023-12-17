import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Iaction {
  action: () => void;
}

const MenuIcons: React.FC<Iaction> = ({ action }): JSX.Element => {
  return (
    <div className="menu-icons d-lg-none" onClick={action}>
      <FontAwesomeIcon icon={faBars} className="icon" />
    </div>
  );
};

export default MenuIcons;
