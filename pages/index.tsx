import type { NextPage } from "next";

import { PublicLayout } from "../components/Layout/PublicLayout";
import { AboutMe } from "../components/sections";
// import { DarkModeButton } from "../components/ui/DarkModeButton";

const Home: NextPage = () => {
  return (
    <PublicLayout>
      {/* <DarkModeButton /> */}
      <AboutMe />
    </PublicLayout>
  );
};

export default Home;
