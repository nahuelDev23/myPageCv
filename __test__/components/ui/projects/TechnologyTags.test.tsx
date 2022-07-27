import { render, screen } from "@testing-library/react";

import { TechnologyTags } from "../../../../components/ui/projects/TechnologyTags";
describe("Test TechnologyTags", () => {
  test("should render the technology on props", () => {
    const technology = {
      name: "React",
    };

    render(<TechnologyTags technology={technology} />);

    expect(screen.getByText(/react/i)).toBeInTheDocument();
  });
});
