import WelcomingHero from "./welcoming/WelcomingHero";
import WelcomingCover from "./welcoming/WelcomingCover";
import WelcomingSupported from "./welcoming/WelcomingSupported";

const Welcoming = (): JSX.Element => {
  return (
    <section id="welcoming">
      <WelcomingHero />
      <WelcomingCover />
      <WelcomingSupported />
    </section>
  );
};

export default Welcoming;
