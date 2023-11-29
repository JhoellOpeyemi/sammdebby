import styled, { css } from "styled-components";

export const PictureWrapper = styled.div`
  position: relative;

  ${({ type }) =>
    type === "slider" &&
    css`
      width: 10.9375rem;
      height: 18.8rem;

      @media (min-width: ${({ theme }) => theme.break.tab}) {
        width: 14rem;
        height: 22rem;
      }

      @media (min-width: ${({ theme }) => theme.break.desktop}) {
        width: 13.9375rem;
        height: 30rem;
      }
    `}

  ${({ type }) =>
    type === "home" &&
    css`
      width: 100%;
      height: 27.1875rem;

      @media (min-width: ${({ theme }) => theme.break.desktop}) {
        height: 38rem;
      }
    `}
`;

export const PictureOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.overlay};
`;

export const StyledPicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
