import { Box } from "@chakra-ui/react";

import { Highlighter } from "../Highlighter";

interface Props {
  goTo: () => void;
  number: string;
  text: string;
}

export const ItemNavBar = ({ goTo, number, text }: Props) => {
  return (
    <Box cursor="pointer" onClick={goTo}>
      <Highlighter fontFamily="firaCode" text={number} />
      {text}
    </Box>
  );
};
