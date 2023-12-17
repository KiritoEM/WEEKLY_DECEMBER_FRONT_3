interface Iblog {
  subtitle: string;
  title: string;
  date: string;
  tags: Itags[];
  img: string;
  id?: string;
}

interface Itags {
  value: string;
}

export default function blogData() {
  const blog: Iblog[] = [
    {
      id: "blog-1",
      img: "/images/blog/blog-1.png",
      title: "Setup your own podcast",
      subtitle: "PODCAST",
      tags: [{ value: "Business" }, { value: "Startup" }],
      date: "Sep 14, 2021",
    },
    {
      img: "/images/blog/blog-2.png",
      title: "Doodle artwork 101",
      subtitle: "TIPS & TRICK",
      tags: [
        { value: "art" },
        { value: "creative" },
        { value: "tips and trick" },
      ],
      date: "Sep 12, 2021",
    },
  ];

  return { blog };
}
