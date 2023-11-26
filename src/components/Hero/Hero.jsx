import { useRef, useEffect } from "react";

import {
  Overlay,
  HeroTexts,
  ImagesContainer,
  Images,
  Image,
  HeroWrapper,
} from "./Hero.styled";

import Sax from "../../assets/images/sax-mobile-min.png";
import Drums from "../../assets/images/drum-mobile-min.png";
import Mic from "../../assets/images/mic-mobile-min.png";
import Piano from "../../assets/images/piano-mobile-min.png";
import Violin from "../../assets/images/violin-mobile-min.png";

const Hero = () => {
  const images = useRef();

  useEffect(() => {
    setInterval(() => {
      const current = document.querySelector(".current-image");
      current.classList.remove("current-image");

      if (current.nextElementSibling) {
        current.nextElementSibling.classList.add("current-image");
      } else {
        images.current.childNodes[0].classList.add("current-image");
      }
    }, 4000);
  }, []);

  return (
    <>
      <HeroWrapper>
        <ImagesContainer>
          <Images ref={images}>
            <Image src={Sax} alt="" className="current-image" />
            <Image src={Mic} alt="" />
            <Image src={Piano} alt="" />
            <Image src={Violin} alt="" />
            <Image src={Drums} alt="" />
          </Images>
          <Overlay />
        </ImagesContainer>

        <HeroTexts>
          <h1>Sammdebby Music</h1>
          <p>Quality over Quantity</p>
        </HeroTexts>
      </HeroWrapper>
    </>
  );
};

export default Hero;
