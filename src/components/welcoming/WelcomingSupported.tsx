import welcomingData from "@/helper/dataHelper/welcomingData";

const WelcomingSupported = (): JSX.Element => {
  const { socialIcons } = welcomingData();
  return (
    <section id="welcoming-supported">
      <div id="welcoming-supported__container">
        <div className="section-header">
          <h5>Supported by:</h5>
        </div>
        <div className="section-icons">
          {socialIcons.map((item, index) => (
            <div className="icon" key={index}>
              <img src={item.icon} alt="" id={item.id} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WelcomingSupported;
