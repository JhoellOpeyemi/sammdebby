import PropTypes from "prop-types";
import { motion } from "framer-motion";

const AnimatedLetters = ({ words }) => {
  let lettersArray = [];
  let wordsArray = [];

  if (words.length <= 30) {
    lettersArray = words.split("");
  } else {
    wordsArray = words.split(" ");
  }

  const hero = {
    initial: {
      y: 100,
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.6, 0.01, -0.05, 0.9],
      },
    },
  };

  const text = {
    initial: {
      y: 100,
      rotate: 20,
    },
    animate: {
      y: 0,
      rotate: 0,

      transition: {
        duration: 0.6,
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
      {lettersArray.length > 1 &&
        lettersArray.map((letter, index) => {
          return (
            <motion.span variants={hero} key={index}>
              {checkSpace(letter)}
            </motion.span>
          );
        })}

      {wordsArray.length > 1 &&
        wordsArray.map((word, index) => {
          return (
            <span key={index} className="outer-span">
              <motion.span variants={text}>
                {word}
                <>&nbsp;</>
              </motion.span>
            </span>
          );
        })}
    </>
  );
};

AnimatedLetters.propTypes = {
  words: PropTypes.string,
};

export default AnimatedLetters;
