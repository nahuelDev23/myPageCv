import { ListIcon, ListItem } from "@chakra-ui/react";
import { AiFillCaretRight } from "react-icons/ai";

import { Technology } from "../../../interface";

export const TechnologiesList = ({ name }: Technology) => {
  return (
    <ListItem key={name} aria-label="listItem">
      <ListIcon as={AiFillCaretRight} color="green.500" />
      {name}
    </ListItem>
  );
};
