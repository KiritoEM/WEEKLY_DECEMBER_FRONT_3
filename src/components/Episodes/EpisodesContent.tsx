import EpisodesCard from "./EpisodesCard";
import episodesData from "@/helper/dataHelper/episodesData";

const EpisodesContent = (): JSX.Element => {
  const { episodesContent } = episodesData();
  return (
    <div className="section-content">
      <div className="row gy-4">
        {episodesContent.map((item, index) => (
          <div className="col-6" key={index}>
            <EpisodesCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EpisodesContent;
