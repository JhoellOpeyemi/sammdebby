import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  padding: 0 7.5%;
  overflow: hidden;
`;

export const StyledDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.color.veryLightBlack};
  mix-blend-mode: difference;
  margin: ${({ margin }) => (margin ? margin : 0)};
`;

export const BackgroundIcon = styled.img`
  position: absolute;
  top: ${({ top }) => (top ? top : "unset")};
  left: ${({ left }) => (left ? left : "unset")};
  right: ${({ right }) => (right ? right : "unset")};
  bottom: ${({ bottom }) => (bottom ? bottom : "unset")};
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ width }) => (width ? width : "100%")};
  z-index: -1;
`;
