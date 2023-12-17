interface IfooterMenu {
  footerMenu01: Iitems[];
}

interface Iitems {
  text: string;
  id?: string;
}

export default function footerData() {
  const footerMenu: IfooterMenu = {
    footerMenu01: [
      { text: "About" },
      { text: "Testimonials", id: "item-2" },
      { text: "Features" },
    ],
  };

  return { footerMenu };
}
