import PropTypes from "prop-types";
import { motion } from "framer-motion";

const AnimatedLetters = ({ words }) => {
  const wordsArray = words.split("");

  const text = {
    initial: {
      y: 100,
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.01, -0.05, 0.9],
      },
    },
  };

  const checkSpace = (letter) => {
    if (letter === " ") {
      return <>&nbsp;</>;
    } else {
      return letter;
    }
  };
  return (
    <>
      {wordsArray.map((letter, index) => {
        return (
          <motion.span variants={text} key={index}>
            {checkSpace(letter)}
          </motion.span>
        );
      })}
    </>
  );
};

AnimatedLetters.propTypes = {
  words: PropTypes.string,
};

export default AnimatedLetters;
