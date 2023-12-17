import SponsorsCard from "./SponsorsCard";
import sponsorsData from "@/helper/dataHelper/sponsorsData";
import Fade from "react-reveal/Fade";

const SponsorsContent = (): JSX.Element => {
  const { sponsors } = sponsorsData();
  return (
    <Fade top casade>
      <div className="section-content">
        <div className="shape-1">
          <img src="/images/sponsors/shape-1.png" alt="" />
        </div>
        <div className="row gx-5 gx-lg-4 gy-5 gy-lg-2">
          {sponsors.map((item, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <SponsorsCard {...item} />
            </div>
          ))}
        </div>
        <div className="shape-2">
          <img src="/images/sponsors/shape-2.png" alt="" />
        </div>
      </div>
    </Fade>
  );
};

export default SponsorsContent;
