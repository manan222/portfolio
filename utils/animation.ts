import { Variants } from "framer-motion";

/**
 * Fade Up
 */
export const fadeUp = (
  delay = 0,
  duration = 0.7
): Variants => ({
  hidden: {
    opacity: 0,
    y: 60,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

/**
 * Fade Down
 */
export const fadeDown = (
  delay = 0,
  duration = 0.7
): Variants => ({
  hidden: {
    opacity: 0,
    y: -60,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

/**
 * Fade Left
 */

export const fadeLeft = (
  delay = 0,
  duration = 0.7
): Variants => ({
  hidden: {
    opacity: 0,
    x: -70,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

/**
 * Fade Right
 */

export const fadeRight = (
  delay = 0,
  duration = 0.7
): Variants => ({
  hidden: {
    opacity: 0,
    x: 70,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

/**
 * Zoom
 */

export const zoomIn = (
  delay = 0,
  duration = 0.7
): Variants => ({
  hidden: {
    opacity: 0,
    scale: 0.8,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

/**
 * Rotate
 */

export const rotateIn = (
  delay = 0
): Variants => ({
  hidden: {
    opacity: 0,
    rotate: -12,
    scale: .9,
  },

  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,

    transition: {
      delay,
      duration: .8,
    },
  },
});

/**
 * Stagger Parent
 */

export const staggerContainer: Variants = {

  hidden: {},

  visible: {

    transition: {

      staggerChildren: .15,

      delayChildren: .2,
    },
  },
};

/**
 * Card Hover
 */

export const cardHover = {

  whileHover: {

    y: -10,

    scale: 1.03,

    transition: {

      duration: .3,
    },
  },
};

/**
 * Floating
 */

export const floatingAnimation = {

  animate: {

    y: [0, -12, 0],

    transition: {

      repeat: Infinity,

      duration: 4,

      ease: "easeInOut",
    },
  },
};