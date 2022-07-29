import { fireEvent, render, screen } from "@testing-library/react";

import { PaginateCarousel, slidesCode } from "../../../../components/ui";

describe("Test PaginateCarousel", () => {
  test("should can see the same quantity of dots than slides", () => {
    const mockSelectedScrollSnap = jest.fn();
    const mockScrollTo = jest.fn();
    const mockOn = jest.fn();

    const emblaApi = {
      selectedScrollSnap: mockSelectedScrollSnap,
      scrollTo: mockScrollTo,
      on: mockOn,
    };

    render(<PaginateCarousel emblaApi={emblaApi} slides={slidesCode} />);

    const buttonList = screen.getAllByRole("button");

    expect(buttonList.length).toBe(slidesCode.length);

    for (const [index] of slidesCode.entries()) {
      fireEvent.click(buttonList[index]);

      expect(mockScrollTo).toHaveBeenCalledWith(index);
      expect(mockOn).toHaveBeenCalledWith("select", expect.any(Function));
    }
  });
});
