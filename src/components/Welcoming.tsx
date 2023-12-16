import WelcomingHero from "./welcoming/WelcomingHero";
import WelcomingCover from "./welcoming/WelcomingCover";
import WelcomingSupported from "./welcoming/WelcomingSupported";
import WelcomingScribble from "./welcoming/WelcomingScribble";

const Welcoming = (): JSX.Element => {
  return (
    <section id="welcoming">
      <WelcomingHero />
      <WelcomingCover />
      <WelcomingSupported />
      <WelcomingScribble />
    </section>
  );
};

export default Welcoming;
