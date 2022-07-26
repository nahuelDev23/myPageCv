import { Grid, Stack, Text } from "@chakra-ui/react";

import data from "../../../lib/technologies.json";
import { AreasAndTechnologies } from "../../../interface";

import { BoxTechnologies } from "./BoxTechnologies";

export const CurrentTecnologiesList = () => {
  const { areasAndTechnologies } = data;

  return (
    <Stack my="8">
      <Text fontWeight="bold" mb="4">
        Algunas tecnologías con las que he trabajado últimamente
      </Text>
      <Grid
        gap="4"
        gridTemplateColumns={{ base: "repeat(2,1fr)", md: "repeat(3,1fr)" }}
      >
        {areasAndTechnologies.map(
          (areaAndTechnologies: AreasAndTechnologies) => (
            <BoxTechnologies
              key={areaAndTechnologies.area}
              area={areaAndTechnologies.area}
              technologies={areaAndTechnologies.technologies}
            />
          ),
        )}
      </Grid>
    </Stack>
  );
};
