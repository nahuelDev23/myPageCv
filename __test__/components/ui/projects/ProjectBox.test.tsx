import { render, screen } from "@testing-library/react";

import { ProjectBox } from "../../../../components/ui/projects/ProjectBox";
import { projects } from "../../../../lib/projects.json";

describe("Test ProjectBox", () => {
  test("should render a card with props", () => {
    const project = projects[0];

    render(<ProjectBox project={project} />);

    expect(screen.getByText(project.title)).toBeInTheDocument();
  });

  test("should render all tech as tag", () => {
    const project = projects[0];

    render(<ProjectBox project={project} />);

    for (const { name } of project.technologies) {
      expect(screen.getByText(name)).toBeInTheDocument();
    }
  });
});
