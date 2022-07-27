import { Stack } from "@chakra-ui/react";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

interface Props {
  urlGit: string;
  urlDeploy: string;
  sizeIcon: string;
}

export const ProjectLinks = ({ urlGit, urlDeploy, sizeIcon }: Props) => {
  return (
    <Stack direction="row">
      {urlGit && (
        <a href={urlGit} rel="noreferrer" target="_blank">
          <AiFillGithub size={sizeIcon} />
        </a>
      )}
      {urlDeploy && (
        <a href={urlDeploy} rel="noreferrer" target="_blank">
          <AiOutlineLink size={sizeIcon} />
        </a>
      )}
    </Stack>
  );
};
