import { render, screen } from "@testing-library/react";

import { ProjectLinks } from "../../../../components/ui/projects/ProjectLinks";

describe("Test ProjectLinks", () => {
  test("should render icons if has a filled string", () => {
    const urlGit = "some.com";
    const urlDeploy = "other.com";

    render(
      <ProjectLinks sizeIcon="24px" urlDeploy={urlDeploy} urlGit={urlGit} />,
    );

    expect(screen.getAllByRole("link").length).toBe(2);
  });

  test("should render only one icon if urlGit is empty", () => {
    const urlGit = "";
    const urlDeploy = "other.com";

    render(
      <ProjectLinks sizeIcon="24px" urlDeploy={urlDeploy} urlGit={urlGit} />,
    );

    expect(screen.getAllByRole("link").length).toBe(1);
  });

  test("should render only one icon if urlDeploy is empty", () => {
    const urlGit = "some.com";
    const urlDeploy = "";

    render(
      <ProjectLinks sizeIcon="24px" urlDeploy={urlDeploy} urlGit={urlGit} />,
    );

    expect(screen.getAllByRole("link").length).toBe(1);
  });
});
