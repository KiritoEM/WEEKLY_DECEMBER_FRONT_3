const TestimonialsCard = (): JSX.Element => {
  return (
    <div className="testimonials-card">
      <div className="quotes">
        <img src="/images/About/“.png" alt="" />
      </div>
      <div className="text">
        <p>
          Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod
          tempor incidi ut labore et dolore magna aliqua.{" "}
        </p>
      </div>
      <div className="author">
        <div className="author__profile">
          <p>
            <img src="/images/testimonials/avatar-1.png" alt="" />
          </p>
        </div>
        <div className="author__plateform">
          <p>
            <img src="" alt="" />
            Spotify
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
