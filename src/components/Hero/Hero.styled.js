import styled from "styled-components";

export const HeroWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    #0c0c0c 0%,
    rgba(0, 0, 0, 0.75) 40.77%,
    rgba(0, 0, 0, 0.75) 58.77%,
    rgba(0, 0, 0, 0.95) 90%
  );
`;

export const ImagesContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Images = styled.div``;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: all 1s linear;

  &.current-image {
    opacity: 1;
    transition: all 1s linear;
  }
`;

export const HeroTexts = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 0 7.5%;
  text-align: center;
  color: ${({ theme }) => theme.color.white};

  h1 {
    font-family: "Poppins SemiBold";
    font-size: ${({ theme }) => theme.fontSize.mobile.large};
    text-transform: uppercase;
    margin-bottom: 1rem;
    line-height: 1.3;
  }

  p {
    font-family: "Ink Free Regular";
    font-size: ${({ theme }) => theme.fontSize.mobile.medium};
  }
`;
