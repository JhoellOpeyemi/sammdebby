import PropTypes from "prop-types";

import {
  PictureOverlay,
  PictureWrapper,
  StyledPicture,
} from "./Picture.styled";

const Picture = ({ src, type }) => {
  return (
    <PictureWrapper type={type}>
      <PictureOverlay />
      <StyledPicture src={src} alt="" />
    </PictureWrapper>
  );
};

Picture.propTypes = {
  type: PropTypes.string,
  src: PropTypes.string,
};

export default Picture;
