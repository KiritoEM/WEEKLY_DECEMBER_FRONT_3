import TestimonialsContent from "./Testimonials/TestimonialsContent";
import TestimonialsHeader from "./Testimonials/TestimonialsHeader";

const Testimonials = (): JSX.Element => {
  return (
    <section id="testimonials">
      <TestimonialsHeader />
      <TestimonialsContent />
    </section>
  );
};

export default Testimonials;
