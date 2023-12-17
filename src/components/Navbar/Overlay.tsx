import { useNav } from "@/hooks/useNav";
import { Fragment } from "react";

interface IOverlay {
  overlay: boolean;
}

const Overlay: React.FC<IOverlay> = ({ overlay }): JSX.Element => {
  return <Fragment>{overlay && <div className="overlay d-lg-none"></div>}</Fragment>;
};

export default Overlay;
