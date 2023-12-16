interface Icard {
  img: string;
}

interface IsocialIcons {
  icon: string;
  id?: string;
}

export default function welcomingData() {
  const cardWelcoming: Icard[] = [
    { img: "/images/Welcoming/card-1.png" },
    { img: "/images/Welcoming/card-2.png" },
    { img: "/images/Welcoming/card-3.png" },
    { img: "/images/Welcoming/card-4.png" },
    { img: "/images/Welcoming/card-5.png" },
  ];

  const socialIcons: IsocialIcons[] = [
    { icon: "/images/Welcoming/Spotify.png" },
    { icon: "/images/Welcoming/Google-podcast.png", id: "youtube" },
    { icon: "/images/Welcoming/Youtube.png" },
  ];

  return { cardWelcoming, socialIcons };
}
