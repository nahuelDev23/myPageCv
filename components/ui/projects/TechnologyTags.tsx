import { Stack, Text } from "@chakra-ui/react";

import { Technology } from "../../../interface";

interface Props {
  technology: Technology;
}

export const TechnologyTags = ({ technology }: Props) => {
  return (
    <Stack bgColor="green.500" borderRadius="md" p="1">
      <Text color="#000" fontSize="12px" fontWeight="bold">
        {technology.name}
      </Text>
    </Stack>
  );
};
