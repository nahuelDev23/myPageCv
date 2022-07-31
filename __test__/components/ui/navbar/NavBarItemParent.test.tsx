import { render, screen, fireEvent } from "@testing-library/react";
import { UnorderedList } from "@chakra-ui/react";

import { NavBarItemParent } from "../../../../components/ui/navBar/NavBarItemParent";
import * as navBar from "../../../../lib/navBar.json";
import { ScrollToContext } from "../../../../context/scrollTo/ScrollToContext";
import { contextProps } from "../../../fixtures";

describe("Test NavBarItemParent", () => {
  const { nav } = navBar;

  test("should render all items of nav", () => {
    render(
      <UnorderedList>
        <NavBarItemParent />
      </UnorderedList>,
    );
    expect(screen.getAllByRole("listitem").length).toBe(nav.length);
  });

  test("should call function with url as index", () => {
    const { goToAboutMe, goToWhyNahue, goToWorks, goToPresent } = contextProps;

    render(
      <ScrollToContext.Provider value={{ ...contextProps }}>
        <UnorderedList>
          <NavBarItemParent />
        </UnorderedList>
      </ScrollToContext.Provider>,
    );
    const linksList = [/sobre mi/i, /por qué\?/i, /proyectos/i, /Actualidad/i];
    const funtionsList = [goToAboutMe, goToWhyNahue, goToWorks, goToPresent];

    for (const iterator in linksList) {
      fireEvent.click(screen.getByText(linksList[iterator]));
      expect(funtionsList[iterator]).toHaveBeenCalled();
    }
  });
});
