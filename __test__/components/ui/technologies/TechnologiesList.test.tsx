import { UnorderedList } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";

import { TechnologiesList } from "../../../../components/ui/technologies/TechnologiesList";

describe("Test TechnologiesList", () => {
  test("should render name param", () => {
    render(
      <UnorderedList>
        <TechnologiesList name="Backend" />
      </UnorderedList>,
    );

    expect(screen.getByLabelText("listItem").textContent).toBe("Backend");
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
