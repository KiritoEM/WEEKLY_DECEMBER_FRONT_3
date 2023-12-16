import MetaTitle from "@/components/MetaTitle";
import Layout from "./Layout";
import Welcoming from "@/components/Welcoming";
import About from "@/components/About";
import Scribble1 from "@/components/Scribble1";
import Testimonials from "@/components/Testimonials";
import Scribble2 from "@/components/Scribble2";
import Features from "@/components/Features";

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
      </section>
    </Layout>
  );
};

export default home;
