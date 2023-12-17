import FeaturesCard from "./FeaturesCard";
import featuresData from "@/helper/dataHelper/featuresData";
import Fade from "react-reveal/Fade";

const FeaturesContent = (): JSX.Element => {
  const { featuresContent } = featuresData();
  return (
    <div className="section-content">
      <Fade bottom cascade>
        <div className="row gx-4 gx-md-5 gx-lg-4 gy-4 gy-md-5">
          {featuresContent.map((item, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <FeaturesCard {...item} />
            </div>
          ))}
        </div>
        <div className="pricing-btn">
          <button className="btn">See Pricing</button>
        </div>
      </Fade>
    </div>
  );
};

export default FeaturesContent;
