interface IaboutData {
  img: string;
}

export default function aboutData() {
  const aboutContent: IaboutData[] = [
    { img: "/images/About/img-1.png" },
    { img: "/images/About/img-2.svg" },
  ];

  return { aboutContent };
}
