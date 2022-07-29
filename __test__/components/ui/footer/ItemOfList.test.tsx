import { render, screen } from "@testing-library/react";
import { UnorderedList } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";

import { ItemOfList } from "../../../../components/ui";

describe("Test ItemOfList", () => {
  test("should render svg icon and url", () => {
    const url = "https://unaurl.com/";

    render(
      <UnorderedList>
        <ItemOfList url={url}>
          <AiFillGithub aria-label="svg" size="32px" />
        </ItemOfList>
      </UnorderedList>,
    );

    expect(screen.getByLabelText("svg")).toBeInTheDocument();
    expect((screen.getByRole("link") as HTMLLinkElement).href).toBe(url);
  });
});
