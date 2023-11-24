import PropTypes from "prop-types";

import Picture from "../../Picture/Picture";
import { StyledSlider } from "./Slider.styled";

const Slider = ({ images }) => {
  console.log(images);
  return (
    <StyledSlider>
      {images.map((img, index) => {
        return (
          <Picture key={index} width="10.9375rem" height="18.8rem" src={img} />
        );
      })}
    </StyledSlider>
  );
};

Slider.propTypes = {
  images: PropTypes.array,
};

export default Slider;
