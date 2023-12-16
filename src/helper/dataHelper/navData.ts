interface ImenuItems {
  label: string;
  icon?: string;
}

export default function navData() {
  const menuItems: ImenuItems[] = [
    { label: "Episodes" },
    { label: "About" },
    { label: "More", icon: "" },
  ];

  return { menuItems };
}
