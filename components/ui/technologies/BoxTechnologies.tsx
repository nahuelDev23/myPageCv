import { Heading, Stack, UnorderedList } from "@chakra-ui/react";

import { AreasAndTechnologies, Technology } from "../../../interface/";

import { TechnologiesList } from "./TechnologiesList";

export const BoxTechnologies = ({
  area,
  technologies,
}: AreasAndTechnologies) => {
  return (
    <Stack key={area}>
      <Heading as="h3" size="xxlH3">
        {area}
      </Heading>

      <UnorderedList listStyleType="none">
        {technologies.map((technology: Technology) => (
          <TechnologiesList key={technology.name} name={technology.name} />
        ))}
      </UnorderedList>
    </Stack>
  );
};
