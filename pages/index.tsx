import type { NextPage } from "next";

import { PublicLayout } from "../components/Layout/PublicLayout";
import { AboutMe, WhyNahue, Works } from "../components/sections";
import { DividerPhrases } from "../components/ui";
// import { DarkModeButton } from "../components/ui/DarkModeButton";

const Home: NextPage = () => {
  return (
    <PublicLayout>
      {/* <DarkModeButton /> */}
      <AboutMe />
      <DividerPhrases
        author="Michael Feathers"
        phrase="El buen código parece estar escrito por alguien a quien le importa."
      />
      <WhyNahue />
      <DividerPhrases
        author="Grady Booch"
        phrase="Nuestro código tiene que ser simple y directo, debería leerse con la misma facilidad que un texto bien escrito"
      />
      <Works />
    </PublicLayout>
  );
};

export default Home;
