export const heroVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
};

const moveTransition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

export const mainVariants = {
  initial: {},
  animate: {
    width: "100%",
    height: "100%",

    transition: {
      ...moveTransition,
    },
  },
};

export const subtitleVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 1.5,
    },
  },
};
