import MetaTitle from "@/components/MetaTitle";
import Layout from "./Layout";
import Welcoming from "@/components/Welcoming";

const home = (): JSX.Element => {
  return (
    <Layout>
      <MetaTitle title="Your Daily Podcast" />
      <section id="home-page">
        <Welcoming />
      </section>
    </Layout>
  );
};

export default home;
