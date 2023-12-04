import styled from "styled-components";

export const HeroWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.break.tab}) {
  }
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
    rgba(0, 0, 0, 0.79) 40.77%,
    rgba(0, 0, 0, 0.95) 100%
  );
`;

export const ImagesContainer = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;

  /* @media (min-width: ${({ theme }) => theme.break.tab}) {
    position: absolute;
    top: 2rem;
    right: 0;
    width: 70%;
    height: 100%;
  }

  @media (min-width: ${({ theme }) => theme.break.desktop}) {
    position: absolute;
    top: 2rem;
    right: 4rem;
    width: 52.5%;
    height: 100%;
  } */
`;

export const Images = styled.div`
  width: min(65%, 600px);
  height: 280px;
  overflow: hidden;
  position: relative;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  z-index: 2;

  h1 {
    font-family: "Poppins SemiBold";
    font-size: clamp(
      ${({ theme }) => theme.fontSize.xMedium},
      4vw + 0.849rem,
      ${({ theme }) => theme.fontSize.largePageHeading}
    );
    text-transform: uppercase;
    margin-bottom: 1rem;
    line-height: 1.3;
    overflow: hidden;
  }

  p {
    font-family: "Ink Free Regular";
    font-size: clamp(
      ${({ theme }) => theme.fontSize.medium},
      2vw + 0.5rem,
      ${({ theme }) => theme.fontSize.xLarge}
    );
    overflow: hidden;
  }

  @media (min-width: ${({ theme }) => theme.break.tab}) {
    text-align: left;

    h1 {
      margin-bottom: 0.5rem;
    }
  }
`;
