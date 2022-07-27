import { Heading, Stack, Text } from "@chakra-ui/react";

import { Technology } from "../../../interface";

import { TechnologyTags } from "./TechnologyTags";
import { ProjectLinks } from "./ProjectLinks";

interface Props {
  project: {
    title: string;
    description: string;
    urlDeploy: string;
    urlGit: string;
    technologies: Technology[];
  };
}

export const ProjectBox = ({ project }: Props) => {
  return (
    <Stack
      key={project.title}
      aria-label="projectBox"
      bgColor="whiteAlpha.300"
      borderRadius="md"
      justifyContent="space-between"
      p="4"
    >
      <Stack direction="row" justifyContent="space-between">
        <Heading as="h4" size="mdH4">
          {project.title}
        </Heading>
        <ProjectLinks
          sizeIcon="24px"
          urlDeploy={project.urlDeploy}
          urlGit={project.urlGit}
        />
      </Stack>

      <Text>{project.description}</Text>

      <Stack direction="row" gap="2" wrap="wrap">
        {project.technologies.map((technology: Technology) => (
          <TechnologyTags
            key={`${technology.name}-${project.title}`}
            technology={technology}
          />
        ))}
      </Stack>
    </Stack>
  );
};
