import FooterCard from "./footer/FooterCard";
import FooterPlateform from "./footer/FooterPlateform";
import Footerinfo from "./footer/Footerinfo";
import footerData from "@/helper/dataHelper/footerData";

interface IsocialIcons {
  icon: string;
  id?: string;
}

const Footer = (): JSX.Element => {
  const { footerMenu } = footerData();

  let socialIcons: IsocialIcons[] = [
    { icon: "/images/Welcoming/Google-podcast.png", id: "icon-1" },
    { icon: "/images/Welcoming/Spotify.png" },
    { icon: "/images/Welcoming/Youtube.png" },
  ];

  return (
    <section id="footer">
      <div className="header">
        <div className="row gy-5 gy-lg-2">
          <div className="col-md-6 col-lg-3">
            <Footerinfo />
          </div>
          <div className="col-md-6 col-lg-3">
            <FooterCard footerMenu01={footerMenu.footerMenu01} />
          </div>
          <div className="col-md-6 col-lg-3">
            <FooterCard footerMenu01={footerMenu.footerMenu02} />
          </div>
          <div className="col-md-6 col-lg-3">
            <FooterPlateform icons={socialIcons} />
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="footer-note mt-3">
        <div className="author">
          <p>
            ©2022. All Rights Reserved. <span> Pod of Cast</span>
          </p>
        </div>
        <div className="privacy">
          <p>Terms • Privacy</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
