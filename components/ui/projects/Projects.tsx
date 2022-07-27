import { Grid } from "@chakra-ui/react";

import { projects } from "../../../lib/projects.json";

import { ProjectBox } from "./ProjectBox";

export const Projects = () => {
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
