const Footerinfo = (): JSX.Element => {
  return (
    <div className="section-info">
      <div className="logo-copyright">
        <div className="logo">
          <img src="/images/logo.png" alt="" />
        </div>
        <div className="copyright">
          <p>©2021.</p>
        </div>
      </div>
      <div className="text mt-4">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="socialIcons mt-4">
          <img src="/images/socials.png" alt="" />
      </div>
    </div>
  );
};

export default Footerinfo;
