import AboutCard from "./About/AboutCard";
import aboutData from "@/helper/dataHelper/aboutData";
import AboutQuote from "./About/AboutQuote";
import Fade from "react-reveal/Fade";

const About = (): JSX.Element => {
  const { aboutContent } = aboutData();
  return (
    <section id="about">
      <Fade bottom cascade>
        <div className="title">
          <h2>Talk. Listen. Get inspired by every minute of it.</h2>
        </div>
      </Fade>
      <div className="content">
        <Fade bottom cascade>
          <div className="row gy-0 gy-md-2">
            {aboutContent.map((item, index) => (
              <div className="col-md-6" key={index}>
                <AboutCard {...item} />
              </div>
            ))}
          </div>
        </Fade>
      </div>
      <AboutQuote />
    </section>
  );
};

export default About;
