import { Grid } from "@chakra-ui/react";

import * as projectsList from "../../../lib/projects.json";

import { ProjectBox } from "./ProjectBox";

export const Projects = () => {
  const { projects } = projectsList;

  return (
    <div>
      <Grid
        gap="8"
        gridTemplateColumns={{ base: "repeat(1,1fr)", sm: "repeat(2,1fr)" }}
      >
        {projects.map((project) => (
          <ProjectBox key={project.title} project={project} />
        ))}
      </Grid>
    </div>
  );
};
