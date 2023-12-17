import welcomingData from "@/helper/dataHelper/welcomingData";
import Fade from "react-reveal/Fade";

const WelcomingCover = (): JSX.Element => {
  const { cardWelcoming } = welcomingData();
  return (
    <section id="welcoming-cover">
      <Fade left>
        <div id="welcoming-cover__container">
          {cardWelcoming.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.img} alt="" />
            </div>
          ))}
        </div>
      </Fade>
    </section>
  );
};

export default WelcomingCover;
