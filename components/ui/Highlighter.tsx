import { Box } from "@chakra-ui/react";

export const Highlighter = ({ text }: { text: string }) => {
  return (
    <Box as="span" color="green.500" fontWeight="bold">
      {text}
    </Box>
  );
};
