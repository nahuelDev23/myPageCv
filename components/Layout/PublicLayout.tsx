import {
  Center,
  Container,
  Divider,
  Stack,
  UnorderedList,
} from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineChrome,
} from "react-icons/ai";

import { IMetadata } from "../../interface";
import { ItemOfList } from "../ui";
import { links } from "../../lib/contactLinks.json";

import { HeadComponent } from "./HeadComponent";

interface Props {
  children: React.ReactNode;
  metadata?: IMetadata;
}

interface Icon {
  [nameOfIcon: string]: ReactNode;
}

const icon: Icon = {
  github: <AiFillGithub aria-label="svg" size="32px" />,
  linkedin: <AiFillLinkedin aria-label="svg" size="32px" />,
  instagram: <AiFillInstagram aria-label="svg" size="32px" />,
  web: <AiOutlineChrome aria-label="svg" size="32px" />,
};

export const PublicLayout: FC<Props> = ({ children, metadata }) => {
  return (
    <Stack>
      <Container maxWidth="container.lg" position="relative">
        <HeadComponent metadata={metadata} />
        {children}
      </Container>

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
            <ItemOfList key={socialIcon} url={url}>
              {icon[socialIcon]}
            </ItemOfList>
          ))}
        </UnorderedList>
        <Center height="150px">
          <Divider bgColor="green.500" orientation="vertical" />
        </Center>
      </Stack>
    </Stack>
  );
};
