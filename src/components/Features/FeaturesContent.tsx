import FeaturesCard from "./FeaturesCard";

const FeaturesContent = (): JSX.Element => {
  return (
    <div className="section-content">
      <div className="row">
        <div className="col-4">
          <FeaturesCard />
        </div>
      </div>
    </div>
  );
};

export default FeaturesContent;
