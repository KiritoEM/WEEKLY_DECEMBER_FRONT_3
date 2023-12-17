import Footerinfo from "./footer/Footerinfo";

const Footer = (): JSX.Element => {
  return (
    <section id="footer">
      <div className="row">
        <div className="col-3">
          <Footerinfo />
        </div>
      </div>
    </section>
  );
};

export default Footer;
