import PropTypes from "prop-types";

import Picture from "../../Picture/Picture";
import { StyledSlider } from "./Slider.styled";

const Slider = ({ images }) => {
  return (
    <>
      <StyledSlider>
        {images.map((img, index) => {
          return <Picture key={index} type="slider" src={img} />;
        })}
      </StyledSlider>
    </>
  );
};

Slider.propTypes = {
  images: PropTypes.array,
};

export default Slider;
