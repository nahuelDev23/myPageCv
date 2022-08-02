export const aboutAppearEffect = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      easeIn: [0.1, 0.01, -0.05, 0.95],
      duration: 0.5,
    },
  },
  hidden: { opacity: 0, y: 100 },
};
