import { ReactNode } from "react";
import { FiGithub, FiInstagram, FiLinkedin, FiChrome } from "react-icons/fi";

import { ItemOfList } from "./ItemOfList";

interface Props {
  url: string;
  socialIcon: string;
}
interface Icon {
  [nameOfIcon: string]: ReactNode;
}

const icon: Icon = {
  github: <FiGithub aria-label="svg" size="32px" />,
  linkedin: <FiLinkedin aria-label="svg" size="32px" />,
  instagram: <FiInstagram aria-label="svg" size="32px" />,
  web: <FiChrome aria-label="svg" size="32px" />,
};

// todo hacer test
export const ItemOfListContainer = ({ url, socialIcon }: Props) => {
  return <ItemOfList url={url}>{icon[socialIcon]}</ItemOfList>;
};
