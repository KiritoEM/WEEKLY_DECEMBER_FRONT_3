import SponsorsContent from "./sponsors/SponsorsContent";
import SponsorsHeader from "./sponsors/SponsorsHeader";

const Sponsors = (): JSX.Element => {
  return (
    <section id="sponsors">
      <SponsorsHeader />
      <SponsorsContent />
    </section>
  );
};

export default Sponsors;
