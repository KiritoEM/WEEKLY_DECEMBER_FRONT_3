import { Fragment, ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppProvider from "./AppProvider";

interface Ichildren {
  children: ReactNode;
}

const Layout: React.FC<Ichildren> = ({ children }): JSX.Element => {
  return (
    <AppProvider>
      <Navbar />
      {children}
      <Footer />
    </AppProvider>
  );
};

export default Layout;
