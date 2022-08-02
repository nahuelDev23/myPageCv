import { render, screen, fireEvent } from "@testing-library/react";

import { TransitionProvider } from "../../../context";

import { TestComponent } from "./TestTransitionComponent";

describe("Test TransitionProvider", () => {
  test("should turn state on true , and can set them", () => {
    render(
      <TransitionProvider>
        <TestComponent />
      </TransitionProvider>,
    );

    fireEvent.click(screen.getByRole("button", { name: /onAbout/i }));
    fireEvent.click(screen.getByRole("button", { name: /onNabBAr/i }));

    expect(
      screen.getByRole("heading", { name: /navbar/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /about/i })).toBeInTheDocument();
  });
});
