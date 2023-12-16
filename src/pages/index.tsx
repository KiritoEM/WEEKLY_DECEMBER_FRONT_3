import MetaTitle from "@/components/MetaTitle";
import Layout from "./Layout";
import Welcoming from "@/components/Welcoming";
import About from "@/components/About";
import Scribble1 from "@/components/Scribble1";
import Testimonials from "@/components/Testimonials";
import Scribble2 from "@/components/Scribble2";
import Features from "@/components/Features";
import Episodes from "@/components/Episodes";

const home = (): JSX.Element => {
  return (
    <Layout>
      <MetaTitle title="Your Daily Podcast" />
      <section id="home-page">
        <Welcoming />
        <Scribble1 />
        <About />
        <Scribble2 top="4rem" />
        <Testimonials />
        <Scribble2 top="-4rem" />
        <Features />
        <Scribble2 top="-2rem" />
        <Episodes />
        <Scribble2 top="-9rem" />
      </section>
    </Layout>
  );
};

export default home;
