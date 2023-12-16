import welcomingData from "@/helper/dataHelper/welcomingData";

const WelcomingCover = (): JSX.Element => {
  const { cardWelcoming } = welcomingData();
  return (
    <section id="welcoming-cover">
      <div id="welcoming-cover__container">
        {cardWelcoming.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.img} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WelcomingCover;
