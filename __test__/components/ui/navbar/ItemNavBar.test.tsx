import { render, screen, fireEvent } from "@testing-library/react";

import { ItemNavBar } from "../../../../components/ui/navBar/ItemNavBar";

describe("Test ItemNavBar", () => {
  const goTo = jest.fn();
  const number = "01.";
  const text = "about";

  test("should render text and number", () => {
    render(<ItemNavBar goTo={goTo} number={number} text={text} />);

    expect(screen.getByText(text)).toBeInTheDocument();
    expect(screen.getByText(number)).toBeInTheDocument();
  });

  test("should trigger goTo", () => {
    render(<ItemNavBar goTo={goTo} number={number} text={text} />);

    fireEvent.click(screen.getByText(text));
    expect(goTo).toHaveBeenCalled();
  });
});
