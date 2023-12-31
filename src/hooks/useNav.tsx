import React, { ReactNode, createContext, useContext, useState } from "react";

interface IAuthProvider {
  children?: ReactNode;
}

interface INavContext {
  openMenu: boolean;
  openOverlay: boolean;
  menuToogle: () => void;
  menuClose: () => void | undefined;
}

interface IDefaultNavContext {
  openMenu: false;
  openOverlay: false;
  menuToogle: () => null;
  menuClose: () => undefined;
}
const NavContext = createContext<INavContext | IDefaultNavContext | null>(null);

export const NavProvider: React.FC<IAuthProvider> = ({
  children,
}): JSX.Element => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openOverlay, setOpenOverlay] = useState<boolean>(false);

  //toogle function
  const menuToogle = () => {
    setOpenMenu(!openMenu);
    setOpenOverlay(!openOverlay);
  };

  const menuClose = () => {
    setOpenMenu(false);
    setOpenOverlay(false);
  };

  return (
    <NavContext.Provider
      value={{
        openMenu,
        openOverlay,
        menuToogle,
        menuClose,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

//nav hooks exportation
export const useNav = () => {
  const context = useContext(NavContext);

  if (!context) {
    throw new Error("useNav must be used within an AppProvider");
  }
  return context;
};
