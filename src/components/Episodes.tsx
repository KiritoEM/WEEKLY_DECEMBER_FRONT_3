import EpisodesContent from "./Episodes/EpisodesContent";
import EpisodesHeader from "./Episodes/EpisodesHeader";

const Episodes = (): JSX.Element => {
  return (
    <section id="episodes">
      <EpisodesHeader />
      <EpisodesContent />
    </section>
  );
};

export default Episodes;
