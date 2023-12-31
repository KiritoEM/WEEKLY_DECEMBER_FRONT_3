import Flip from "react-reveal/Flip";

const TestimonialsHeader = (): JSX.Element => {
  return (
    <Flip bottom>
      <div className="section-header">
        <div className="title">
          <div className="sparkle">
            <img src="/images/testimonials/Sparkle.png" alt="" />
          </div>
          <h1>What our listeners say</h1>
        </div>
        <div className="text">
          <p>Their experience throughout every platform</p>
        </div>
      </div>
    </Flip>
  );
};

export default TestimonialsHeader;
