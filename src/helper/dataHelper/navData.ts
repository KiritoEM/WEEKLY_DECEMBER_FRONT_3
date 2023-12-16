interface ImenuItems {
  label: string;
  icon?: string;
}

interface InavButtons {
  id: string;
  value: string;
}

export default function navData() {
  const menuItems: ImenuItems[] = [
    { label: "Episodes" },
    { label: "About" },
    { label: "More", icon: "/images/Arrow-Down.png" },
  ];

  const navButtons: InavButtons[] = [
    { id: "btn-1", value: "Recent episodes" },
    { id: "btn-2", value: "Subscribe" },
  ];

  return { menuItems, navButtons };
}
