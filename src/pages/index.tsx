import MetaTitle from "@/components/MetaTitle";
import Layout from "./Layout";
import Welcoming from "@/components/Welcoming";
import About from "@/components/About";
import Scribble1 from "@/components/Scribble1";

const home = (): JSX.Element => {
  return (
    <Layout>
      <MetaTitle title="Your Daily Podcast" />
      <section id="home-page">
        <Welcoming />
        <Scribble1 />
        <About />
      </section>
    </Layout>
  );
};

export default home;
