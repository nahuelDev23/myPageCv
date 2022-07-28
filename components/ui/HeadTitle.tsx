import { Heading, Stack, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  number: string;
}

export const HeadTitle = ({ title, number }: Props) => {
  return (
    <Heading as="h2" mb="4">
      <Stack alignItems="baseline" direction="row">
        <Text color="green.500" fontFamily="firaCode" fontWeight="500">
          {number}.
        </Text>
        <Text fontFamily="paraph">{title} </Text>
      </Stack>
    </Heading>
  );
};
