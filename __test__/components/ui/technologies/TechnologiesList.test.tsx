import { UnorderedList } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";

import { TechnologiesList } from "../../../../components/ui/technologies/TechnologiesList";
import { areasAndTechnologies } from "../../../../lib/technologies.json";

describe("Test TechnologiesList", () => {
  test("should render name param", () => {
    const area = areasAndTechnologies[0].area;

    render(
      <UnorderedList>
        <TechnologiesList name={area} />
      </UnorderedList>,
    );

    expect(screen.getByLabelText("listItem").textContent).toBe(area);
  });

  test("should render list with icon svg", () => {
    render(
      <UnorderedList>
        <TechnologiesList name="Backend" />
      </UnorderedList>,
    );

    expect(screen.getByRole("presentation")).toBeTruthy();
  });
});
