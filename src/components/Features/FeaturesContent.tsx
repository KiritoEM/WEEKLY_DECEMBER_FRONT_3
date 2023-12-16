import FeaturesCard from "./FeaturesCard";
import featuresData from "@/helper/dataHelper/featuresData";

const FeaturesContent = (): JSX.Element => {
  const { featuresContent } = featuresData();
  return (
    <div className="section-content">
      <div className="row gx-4 gy-5">
        {featuresContent.map((item, index) => (
          <div className="col-4" key={index}>
            <FeaturesCard {...item} />
          </div>
        ))}
      </div>
      <div className="pricing-btn">
          <button className="btn">See Pricing</button>
      </div>
    </div>
  );
};

export default FeaturesContent;
