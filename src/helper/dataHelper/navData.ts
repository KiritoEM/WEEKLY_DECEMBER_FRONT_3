import scrollHelper, { Iscroll } from "../scrollHelper";

interface ImenuItems {
  label: string;
  icon?: string;
  action?: () => void ;
}

interface InavButtons {
  id: string;
  value: string;
  action?: () => void;
}

export default function navData() {
  const { scrollToElement } = scrollHelper();

  const menuItems: ImenuItems[] = [
    { label: "Episodes", action: () => scrollToElement("episodes") },
    { label: "About", action: () => scrollToElement("about") },
    {
      label: "More",
      icon: "/images/Arrow-Down.png",
      action: () => scrollToElement("CTA"),
    },
  ];

  const navButtons: InavButtons[] = [
    {
      id: "btn-1",
      value: "Recent episodes",
      action: () => scrollToElement("episodes"),
    },
    { id: "btn-2", value: "Subscribe" },
  ];

  return { menuItems, navButtons };
}
