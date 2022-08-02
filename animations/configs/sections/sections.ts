export const sectionsAppearEffect = {
  initial: {
    opacity: 0,
    y: 300,
  },
  viewport: { once: true },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      easeIn: [0.1, 0.01, -0.05, 0.95],
      duration: 0.8,
    },
  },
};
