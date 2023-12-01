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

import { heroVariants, mainVariants } from "./Hero.motion";

const Hero = () => {
  return (
    <>
      <HeroWrapper
        as={motion.div}
        variants={heroVariants}
        initial="initial"
        animate="animate"
      >
        <HeroTexts>
          <h1>Sammdebby Music</h1>
          <p>Quality over Quantity</p>
        </HeroTexts>

        <ImagesContainer>
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
