import { NavProvider } from "@/hooks/useNav";
import { ReactNode } from "react";

interface Ichildren {
  children: ReactNode;
}

const AppProvider: React.FC<Ichildren> = ({ children }): JSX.Element => {
  return <NavProvider>{children}</NavProvider>;
};

export default AppProvider;
