import { Grid, Heading, Stack, Text } from "@chakra-ui/react";
import { useContext } from "react";

import { ScrollToContext } from "../../context";
import { SectionLayout } from "../Layout";
import { DividerPhrases, HeadTitle, IndividualSkills, TeamWork } from "../ui";

export const WhyNahue = () => {
  const { scrollToWhyNahue } = useContext(ScrollToContext);

  return (
    <SectionLayout reference={scrollToWhyNahue}>
      <HeadTitle number="02" title="Por qué es bueno trabajar con Nahue?" />
      <Stack>
        <Grid
          gap="8"
          gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
          mb="8"
        >
          <TeamWork />
          <IndividualSkills />
        </Grid>
      </Stack>
      <DividerPhrases
        author="Grady Booch"
        phrase="Nuestro código tiene que ser simple y directo, debería leerse con la misma facilidad que un texto bien escrito"
      />
    </SectionLayout>
  );
};
