import { Fragment, ReactNode } from "react";

interface Ichildren{
    children: ReactNode
}

const Layout : React.FC<Ichildren> = ({children}) : JSX.Element => {
    return (
        <Fragment>
             {children}
        </Fragment>
    );
};

export default Layout;