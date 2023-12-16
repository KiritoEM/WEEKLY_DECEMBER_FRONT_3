import EpisodesCard from "./EpisodesCard";

const EpisodesContent = (): JSX.Element => {
  return (
    <div className="section-content">
      <div className="row">
        <div className="col-6">
          <EpisodesCard />
        </div>
      </div>
    </div>
  );
};

export default EpisodesContent;
