import EpisodesCard from "./EpisodesCard";
import episodesData from "@/helper/dataHelper/episodesData";
import Flip from "react-reveal/Flip";

const EpisodesContent = (): JSX.Element => {
  const { episodesContent } = episodesData();
  return (
    <div className="section-content">
      <div className="sparkle">
        <img src="/images/episodes/sparkle.png" alt="" />
      </div>
        <div className="row gy-4">
          {episodesContent.map((item, index) => (
            <div className="col-lg-6" key={index}>
              <EpisodesCard {...item} />
            </div>
          ))}
        </div>  
      <div className="all-episodes">
        <button className="btn">BROWSE ALL EPISODES</button>
      </div>
    </div>
  );
};

export default EpisodesContent;
