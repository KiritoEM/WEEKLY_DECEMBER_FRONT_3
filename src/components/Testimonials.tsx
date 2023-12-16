import TestimonialsContent from "./Testimonials/TestimonialsContent";
import TestimonialsHeader from "./Testimonials/TestimonialsHeader";
import TestimonialsButtons from "./Testimonials/TestimonialsButtons";

const Testimonials = (): JSX.Element => {
  return (
    <section id="testimonials">
      <TestimonialsHeader />
      <TestimonialsContent />
      <TestimonialsButtons />
    </section>
  );
};

export default Testimonials;
