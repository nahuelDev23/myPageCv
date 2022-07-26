import { Box, Stack, Text } from "@chakra-ui/react";
interface Props {
  phrase: string;
  author: string;
}

export const DividerPhrases = ({ phrase, author }: Props) => {
  return (
    <Stack
      alignItems="center"
      aria-label="dividerPhrases"
      justifyContent="center"
      my="12"
      position="relative"
    >
      <Box bg="green.500" height="1px" width="100%" />
      <Text fontStyle="italic">
        {phrase} -{" "}
        <Box as="span" fontWeight="bold">
          {author}
        </Box>
      </Text>
      <Box bg="green.500" height="1px" width="100%" />
    </Stack>
  );
};
