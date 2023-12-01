import PropTypes from "prop-types";
import { useEffect } from "react";
import { motion, useAnimate, usePresence } from "framer-motion";

import { Image, ImageContainer, Reveal, StyledLoader } from "./Loader.styled";
import Sax from "../../assets/images/sax-mobile-min.png";
import Mic from "../../assets/images/mic-mobile-min.png";
import Piano from "../../assets/images/piano-mobile-min.png";
import { Overlay } from "./Loader.styled";

import { enterAnimation } from "./Loader.motion";

const Loader = ({ setLoader }) => {
  const [scope, animate] = useAnimate();
  const [isPresent] = usePresence();

  useEffect(() => {
    if (isPresent) {
      enterAnimation(animate, scope, setLoader);
    }
  }, []);

  return (
    <StyledLoader as={motion.div} ref={scope}>
      <div>
        <ImageContainer as={motion.div} layoutId="main-image" className="base">
          <Overlay className="base-overlay" />
          <Image src={Sax} alt="" />
          <Reveal className="base-reveal" />
        </ImageContainer>

        <ImageContainer className="second">
          <Overlay />
          <Image src={Piano} alt="" />
          <Reveal className="second-reveal" />
        </ImageContainer>
        <ImageContainer className="first">
          <Overlay />
          <Image src={Mic} alt="" />
          <Reveal className="first-reveal" />
        </ImageContainer>
      </div>
    </StyledLoader>
  );
};

Loader.propTypes = {
  setLoader: PropTypes.function,
};

export default Loader;
