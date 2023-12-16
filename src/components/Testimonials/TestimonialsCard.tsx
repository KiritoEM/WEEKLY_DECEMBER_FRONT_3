interface ItestimonialProps {
  avatar: string;
  name: string;
  plateform_icon: string;
  plateform_name: string;
}

const TestimonialsCard: React.FC<ItestimonialProps> = ({
  avatar,
  name,
  plateform_icon,
  plateform_name,
}): JSX.Element => {
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
            <img src={avatar} alt="" />
            {name}
          </p>
        </div>
        <div className="author__plateform">
          <p>
            <img src={plateform_icon} alt="" />
            {plateform_name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
