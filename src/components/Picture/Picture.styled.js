import styled from "styled-components";

export const PictureWrapper = styled.div`
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export const PictureOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.35);
`;

export const StyledPicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
