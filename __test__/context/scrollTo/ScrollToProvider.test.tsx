import { render, screen, fireEvent } from "@testing-library/react";

import { ScrollToProvider } from "../../../context";

import { TestComponent } from "./TestScrollToComponents";

describe("Test ScrollProvider", () => {
  const scrollIntoView = jest.fn();

  window.HTMLElement.prototype.scrollIntoView = scrollIntoView;

  test("should go to about", () => {
    render(
      <ScrollToProvider>
        <TestComponent section="about" />
      </ScrollToProvider>,
    );

    fireEvent.click(screen.getByRole("button"));

    expect(scrollIntoView).toHaveBeenCalled();
  });

  test("should go to why", () => {
    render(
      <ScrollToProvider>
        <TestComponent section="why" />
      </ScrollToProvider>,
    );

    fireEvent.click(screen.getByRole("button"));

    expect(scrollIntoView).toHaveBeenCalled();
  });

  test("should go to works", () => {
    render(
      <ScrollToProvider>
        <TestComponent section="works" />
      </ScrollToProvider>,
    );

    fireEvent.click(screen.getByRole("button"));

    expect(scrollIntoView).toHaveBeenCalled();
  });

  test("should go to present", () => {
    render(
      <ScrollToProvider>
        <TestComponent section="present" />
      </ScrollToProvider>,
    );

    fireEvent.click(screen.getByRole("button"));

    expect(scrollIntoView).toHaveBeenCalled();
  });
});
