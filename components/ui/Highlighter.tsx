import { Box, ResponsiveValue } from "@chakra-ui/react";

interface Props {
  text: string;
  fontFamily?: ResponsiveValue<any> | undefined;
}

export const Highlighter = ({ text, fontFamily = "Raleway" }: Props) => {
  return (
    <Box as="span" color="green.500" fontFamily={fontFamily} fontWeight="bold">
      {text}
    </Box>
  );
};
