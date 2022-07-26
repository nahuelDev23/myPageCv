import { render, screen } from "@testing-library/react";

import { areasAndTechnologies } from "../../../../lib/technologies.json";
import { CurrentTecnologiesList } from "../../../../components/ui/technologies";

describe("test CurrentTecnologiesList", () => {
  test("should render all technologies", () => {
    render(<CurrentTecnologiesList />);

    for (const { area, technologies } of areasAndTechnologies) {
      expect(screen.getByRole("heading", { name: area })).toBeInTheDocument();

      for (const { name } of technologies) {
        expect(screen.getByText(name)).toBeInTheDocument();
      }
    }

    const sumOfAllTechnologiesInList = areasAndTechnologies.reduce(
      (prev, current) => {
        return prev + current.technologies.length;
      },
      0,
    );

    expect(screen.getAllByLabelText("listItem").length).toBe(
      sumOfAllTechnologiesInList,
    );
  });
});
