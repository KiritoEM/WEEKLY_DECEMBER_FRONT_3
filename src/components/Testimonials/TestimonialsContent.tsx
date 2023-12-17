import TestimonialsCard from "./TestimonialsCard";
import testimonialsData from "@/helper/dataHelper/testimonialsData";
import Fade from "react-reveal/Fade";

const TestimonialsContent = (): JSX.Element => {
  const { testimonials } = testimonialsData();
  return (
      <div className="section-content">
        {testimonials.map((item, index) => (
          <TestimonialsCard key={index} {...item} />
        ))}
      </div>
  );
};

export default TestimonialsContent;
