export const listNavBarDesktop = {
  visible: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.1,
    },
  },
};

export const itemNavBarDesktop = {
  visible: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
  hidden: { y: 100 },
};
