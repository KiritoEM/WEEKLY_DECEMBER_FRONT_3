interface Ifeatures {
  img: string;
  title: string;
}

export default function featuresData() {
  const featuresContent: Ifeatures[] = [
    { img: "/images/features/icon-1.png", title: "Topic by Request" },
    { img: "/images/features/icon-2.png", title: "Exclusive Content" },
    { img: "/images/features/icon-3.png", title: "Exclusive Content" },
    { img: "/images/features/icon-4.png", title: "Livestreaming Access" },
    { img: "/images/features/icon-5.png", title: "Exclusive Episodes & Merch" },
    { img: "/images/features/icon-6.png", title: "And much more!" },
  ];
}
