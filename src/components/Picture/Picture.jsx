import PropTypes from "prop-types";

import {
  PictureOverlay,
  PictureWrapper,
  StyledPicture,
} from "./Picture.styled";

const Picture = ({ width, height, src }) => {
  return (
    <PictureWrapper width={width} height={height}>
      <PictureOverlay />
      <StyledPicture src={src} alt="" />
    </PictureWrapper>
  );
};

Picture.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  src: PropTypes.string,
};

export default Picture;
