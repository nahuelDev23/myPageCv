import { render, screen, fireEvent } from "@testing-library/react";
import { useContext } from "react";

import { ScrollToProvider } from "../../context";
import { ScrollToContext } from "../../context/scrollTo/ScrollToContext";
import { NavAction, Section } from "../../interface";

const TestComponent = ({ section }: Section) => {
  const {
    goToAboutMe,
    scrollToAboutMe,
    goToWhyNahue,
    goToWorks,
    goToPresent,
    scrollToPresent,
    scrollToWhyNahue,
    scrollToWorks,
  } = useContext(ScrollToContext);

  const navAction: NavAction = {
    about: goToAboutMe,
    why: goToWhyNahue,
    works: goToWorks,
    present: goToPresent,
  };

  const refAction: NavAction = {
    about: scrollToAboutMe,
    why: scrollToWhyNahue,
    works: scrollToWorks,
    present: scrollToPresent,
  };

  return (
    <div>
      <button onClick={navAction[section as keyof NavAction]}>GoTo</button>
      <div ref={refAction[section as keyof NavAction]}>hey!</div>
    </div>
  );
};

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
