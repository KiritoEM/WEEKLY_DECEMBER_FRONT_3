interface Isponsors {
  id?: string;
  title: string;
  price: string;
  points: Ipoints[];
  important?: string;
}

interface Ipoints {
  text: string;
}

export default function sponsorsData() {
  const sponsors: Isponsors[] = [
    {
      title: "Member",
      price: "$9.99",
      points: [
        { text: "Exclusive Content" },
        { text: "5% Discount on Merch" },
        { text: "Join the Community" },
        { text: "Livestreaming Access" },
      ],
    },
    {
      id: "family",
      title: "Family",
      price: "$14.99",
      important: 'MOST POPULAR',
      points: [
        { text: "Everything in Tier 1" },
        { text: "Free tickets to Events" },
        { text: "Limited Edition Merch" },
        { text: "Promote your Product" },
        { text: "Request Topic" },
      ],
    },
  ];

  return { sponsors };
}
