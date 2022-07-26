import { render, screen } from "@testing-library/react";

import { areasAndTechnologies } from "../../../../lib/technologies.json";
import { BoxTechnologies } from "../../../../components/ui/technologies/BoxTechnologies";

describe("test BoxTechnologies", () => {
  test("should render area and list of technologies", () => {
    const area = areasAndTechnologies[0].area;
    const technologies = areasAndTechnologies[0].technologies;

    render(<BoxTechnologies area={area} technologies={technologies} />);

    expect(screen.getByRole("heading", { name: "Frontend" }));

    expect(screen.getAllByLabelText("listItem").length).toBe(
      technologies.length,
    );
  });
});
