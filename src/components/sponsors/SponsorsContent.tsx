import SponsorsCard from "./SponsorsCard";
import sponsorsData from "@/helper/dataHelper/sponsorsData";

const SponsorsContent = (): JSX.Element => {
  const { sponsors } = sponsorsData();
  return (
    <div className="section-content">
      <div className="shape-1">
        <img src="/images/sponsors/shape-1.png" alt="" />
      </div>
      <div className="row">
        {sponsors.map((item, index) => (
          <div className="col-4" key={index}>
            <SponsorsCard {...item} />
          </div>
        ))}
      </div>
      <div className="shape-2">
        <img src="/images/sponsors/shape-2.png" alt="" />
      </div>
    </div>
  );
};

export default SponsorsContent;
