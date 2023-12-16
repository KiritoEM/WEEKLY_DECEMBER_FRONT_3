import AboutCard from "./About/AboutCard";
import aboutData from "@/helper/dataHelper/aboutData";
import AboutQuote from "./About/AboutQuote";

const About = (): JSX.Element => {
  const { aboutContent } = aboutData();
  return (
    <section id="about">
      <div className="title">
        <h2>Talk. Listen. Get inspired by every minute of it.</h2>
      </div>
      <div className="content">
        <div className="row">
          {aboutContent.map((item, index) => (
            <div className="col-6" key={index}>
              <AboutCard {...item} />
            </div>
          ))}
        </div>
      </div>
      <AboutQuote />
    </section>
  );
};

export default About;
