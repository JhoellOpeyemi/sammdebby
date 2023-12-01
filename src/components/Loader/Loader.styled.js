import styled from "styled-components";

export const StyledLoader = styled.div`
  background-color: ${({ theme }) => theme.color.bgColor};
  width: 100%;
  height: 100vh;
  overflow: hidden;
  opacity: 0;
  display: grid;
  place-items: center;

  & > div {
    width: min(65%, 600px);
    height: 280px;
    overflow: hidden;
    opacity: 1;
    position: relative;
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);

  &.base-overlay {
    background: linear-gradient(
      180deg,
      #0c0c0c 0%,
      rgba(0, 0, 0, 0.79) 40.77%,
      rgba(0, 0, 0, 0.95) 100%
    );
  }
`;

export const Reveal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.bgColor};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
