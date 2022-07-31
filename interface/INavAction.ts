export interface NavAction {
  about: () => void;
  why: () => void;
  works: () => void;
  present: () => void;
}

export type Section = {
  section: "about" | "why" | "works" | "present";
};
