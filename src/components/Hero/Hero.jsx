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
  return (
    <>
      <HeroWrapper>
        <ImagesContainer>
          <Images>
            <Image src={Sax} alt="" />
            {/* <Image src={Mic} alt="" /> */}
            {/* <Image src={Piano} alt="" /> */}
            {/* <Image src={Drums} alt="" /> */}
            {/* <Image src={Violin} alt="" /> */}
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
