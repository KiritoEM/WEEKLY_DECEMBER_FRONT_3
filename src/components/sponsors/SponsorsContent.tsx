import SponsorsCard from "./SponsorsCard";
import sponsorsData from "@/helper/dataHelper/sponsorsData";

const SponsorsContent = (): JSX.Element => {
  const { sponsors } = sponsorsData();
  return (
    <div className="section-content">
      <div className="row">
        {sponsors.map((item, index) => (
          <div className="col-4" key={index}>
            <SponsorsCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorsContent;
