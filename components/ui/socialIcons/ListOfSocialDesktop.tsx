import { Center, Divider, Stack, UnorderedList } from "@chakra-ui/react";

import * as contactLinks from "../../../lib/contactLinks.json";

import { ItemOfListContainer } from "./ItemOfListContainer";

export const ListOfSocialDesktop = () => {
  const { links } = contactLinks;

  return (
    <Stack
      alignItems="center"
      bottom="0"
      display={{ base: "none", xl: "flex" }}
      justifyContent="center"
      left="8"
      position="fixed"
    >
      <UnorderedList
        alignItems="center"
        display="flex"
        flexDir="column"
        gap="8"
        justifyContent="center"
        listStyleType="none"
        m="0"
        mb="4"
        w="100%"
      >
        {links.map(({ socialIcon, url }) => (
          <ItemOfListContainer
            key={socialIcon}
            socialIcon={socialIcon}
            url={url}
          />
        ))}
      </UnorderedList>
      <Center height="150px">
        <Divider bgColor="green.500" orientation="vertical" />
      </Center>
    </Stack>
  );
};
