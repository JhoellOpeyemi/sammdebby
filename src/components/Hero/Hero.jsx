import { motion } from "framer-motion";

import {
  Overlay,
  HeroTexts,
  ImagesContainer,
  Images,
  Image,
  HeroWrapper,
} from "./Hero.styled";

import Sax from "../../assets/images/sax-mobile-min.png";

import {
  heroTextsVariants,
  heroVariants,
  mainVariants,
  subtitleVariants,
  textVariants,
} from "./Hero.motion";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";

const Hero = () => {
  return (
    <>
      <HeroWrapper
        as={motion.div}
        variants={heroVariants}
        initial="initial"
        animate="animate"
      >
        <HeroTexts as={motion.div} variants={heroTextsVariants}>
          <motion.h1 variants={textVariants}>
            <AnimatedLetters words="Sammdebby Music" />
          </motion.h1>
          <motion.p variants={subtitleVariants}>Quality over Quantity</motion.p>
        </HeroTexts>

        <ImagesContainer as={motion.div}>
          <Images as={motion.div} variants={mainVariants}>
            <Image as={motion.img} src={Sax} alt="" />
            <Overlay />
          </Images>
        </ImagesContainer>
      </HeroWrapper>
    </>
  );
};

export default Hero;
