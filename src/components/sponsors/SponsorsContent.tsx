import SponsorsCard from "./SponsorsCard";

const SponsorsContent = (): JSX.Element => {
  return (
    <div className="section-content">
      <div className="row">
        <div className="col-4">
          <SponsorsCard />
        </div>
      </div>
    </div>
  );
};

export default SponsorsContent;
