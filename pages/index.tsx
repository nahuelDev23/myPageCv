import type { NextPage } from "next";

import { PublicLayout } from "../components/Layout/PublicLayout";
import { AboutMe, Present, WhyNahue, Works } from "../components/sections";
import { Footer } from "../components/sections/Footer";
// import { DarkModeButton } from "../components/ui/DarkModeButton";

const Home: NextPage = () => {
  return (
    <PublicLayout>
      {/* <DarkModeButton /> */}
      <AboutMe />
      <WhyNahue />
      <Works />
      <Present />
      <Footer />
    </PublicLayout>
  );
};

export default Home;
