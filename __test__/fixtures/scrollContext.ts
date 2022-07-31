const goToAboutMe = jest.fn();
const goToWorks = jest.fn();
const goToPresent = jest.fn();
const goToWhyNahue = jest.fn();

const scrollToPresent = "present";
const scrollToAboutMe = "about";
const scrollToWhyNahue = "why";
const scrollToWorks = "works";

export const contextProps = {
  goToAboutMe,
  goToWorks,
  goToPresent,
  goToWhyNahue,
  scrollToPresent,
  scrollToAboutMe,
  scrollToWhyNahue,
  scrollToWorks,
};
