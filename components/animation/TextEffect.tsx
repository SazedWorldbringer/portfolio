import { motion } from "framer-motion";
import * as React from "react";
import MotionText, { MotionTextVariants } from "./MotionText";

const spring = {
  type: "spring",
  mass: .1,
  damping: 20,
  stiffness: 200
};

const DELAY_FACTOR = 0.03;

const variantsOne: MotionTextVariants = {
  // animation states for each individual char
  char: {
    state1: (context) => ({
      y: "0",
      transition: {
        ...spring,
        delay: context.char.index * DELAY_FACTOR,
      }
    }),
    state2: (context) => ({
      y: "100%",
      transition: {
        ...spring,
        delay: (context.charCount - context.char.index) * DELAY_FACTOR
      }
    })
  }
};

const variantsTwo: MotionTextVariants = {
  // animation states for each individual char
  char: {
    state1: (context) => ({
      y: "-100%",
      transition: {
        ...spring,
        delay: context.char.index * DELAY_FACTOR,
      }
    }),
    state2: (context) => ({
      y: "0%",
      transition: {
        ...spring,
        delay: (context.charCount - context.char.index) * DELAY_FACTOR
      }
    })
  }
};

// Text is auto-split in to lines, words, and chars. Each are animatable :)
export default function TextEffectOne({ text, ...otherProps }) {
  return (
    <motion.div {...otherProps} style={{ position: "relative" }}>
      <MotionText text={text} variants={variantsOne} />
      <MotionText
        text={text}
        style={{ position: "absolute", inset: 0 }}
        variants={variantsTwo}
      />
    </motion.div>
  );
}

