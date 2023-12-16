interface Iepisodes {
  id?: string;
  img: string;
  subtitle: string;
  title: string;
  tags: Itags[];
}

interface Itags {
  label: string;
}

export default function episodesData() {
  const episodesContent: Iepisodes[] = [
    {
      id: "episodes-6",
      img: "/images/episodes/episode-1.png",
      subtitle: "Eps. 6",
      title: "Pandemic Becoming Endemic",
      tags: [{ label: "covid-19" }, { label: "health" }],
    },
    {
      id: "episodes-5",
      img: "/images/episodes/episode-1.png",
      subtitle: "Eps. 5",
      title: "Tesla Autopilot Controversy",
      tags: [{ label: "automation" }, { label: "tech" }],
    },
    {
      id: "episodes-4",
      img: "/images/episodes/episode-1.png",
      subtitle: "Eps. 4",
      title: "Women's Rights? Is it alright?",
      tags: [{ label: "women’s rights" }],
    },
    {
      id: "episodes-3",
      img: "/images/episodes/episode-1.png",
      subtitle: "Eps. 3",
      title: "How to Deal with Self–Confidence",
      tags: [{ label: "self-esteem" }, { label: "health" }],
    },
    {
      id: "episodes-2",
      img: "/images/episodes/episode-1.png",
      subtitle: "Eps. 2",
      title: "Type of Social Classes of People",
      tags: [{ label: "social class" }, { label: "wealth" }],
    },
    {
      id: "episodes-1",
      img: "/images/episodes/episode-1.png",
      subtitle: "Eps. 1",
      title: "Are you a Perplexed Mind Person?",
      tags: [{ label: "mind-behaviour" }, { label: "health" }],
    },
  ];

  return { episodesContent };
}
