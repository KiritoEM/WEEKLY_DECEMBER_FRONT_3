import FooterCard from "./footer/FooterCard";
import Footerinfo from "./footer/Footerinfo";
import footerData from "@/helper/dataHelper/footerData";

const Footer = (): JSX.Element => {
  const { footerMenu } = footerData();
  return (
    <section id="footer">
      <div className="row">
        <div className="col-3">
          <Footerinfo />
        </div>
        <div className="col-3">
          {footerMenu.footerMenu01.map((item, index) => (
            <FooterCard footerMenu01={[item]} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
