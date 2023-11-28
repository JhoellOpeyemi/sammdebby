import { useState, useRef, useEffect } from "react";

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

import SaxDesktop from "../../assets/images/sax-desktop-min.png";
import DrumsDesktop from "../../assets/images/drum-desktop-min.png";
import MicDesktop from "../../assets/images/mic-desktop-min.png";
import PianoDesktop from "../../assets/images/piano-desktop-min.png";
import ViolinDesktop from "../../assets/images/violin-desktop-min.png";

const Hero = () => {
  const [mobile, setMobile] = useState(true);
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
    }, 5500);
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setMobile(false);
    }
  }, []);

  return (
    <>
      <HeroWrapper>
        <HeroTexts>
          <h1>Sammdebby Music</h1>
          <p>Quality over Quantity</p>
        </HeroTexts>

        <ImagesContainer>
          {mobile && (
            <Images ref={images}>
              <Image src={Sax} alt="" className="current-image" />
              <Image src={Mic} alt="" />
              <Image src={Piano} alt="" />
              <Image src={Violin} alt="" />
              <Image src={Drums} alt="" />
            </Images>
          )}

          {!mobile && (
            <Images ref={images}>
              <Image src={SaxDesktop} alt="" className="current-image" />
              <Image src={MicDesktop} alt="" />
              <Image src={PianoDesktop} alt="" />
              <Image src={ViolinDesktop} alt="" />
              <Image src={DrumsDesktop} alt="" />
            </Images>
          )}
        </ImagesContainer>

        <Overlay />
      </HeroWrapper>
    </>
  );
};

export default Hero;
