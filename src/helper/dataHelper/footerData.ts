interface IfooterMenu {
  footerMenu01: Iitems[];
  footerMenu02: Iitems[]
}

interface Iitems {
  text: string;
  id?: string;
}

export default function footerData() {
  const footerMenu: IfooterMenu = {
    footerMenu01: [
      { text: "About" },
      { text: "Testimonials", id: "colored-item" },
      { text: "Features" },
    ],
    footerMenu02: [
        { text: "Episodes" ,  id: "colored-item" },
        { text: "Pricing" },
        { text: "Blog" },
      ],
  };

  return { footerMenu };
}
