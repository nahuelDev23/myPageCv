import { render, screen } from "@testing-library/react";

import { Projects } from "../../../../components/ui";
import { projects } from "../../../../lib/projects.json";

describe("Test Projects", () => {
  test("should render all projects", () => {
    render(<Projects />);

    expect(screen.getAllByLabelText("projectBox").length).toBe(projects.length);

    for (const { title } of projects) {
      expect(screen.getByText(title)).toBeInTheDocument();
    }
  });
});
