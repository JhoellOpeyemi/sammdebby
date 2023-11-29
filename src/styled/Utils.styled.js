import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: min(85%, 1240px);
  overflow: hidden;
  margin: 0 auto;
`;

export const StyledDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.color.veryLightBlack};
  mix-blend-mode: difference;
  margin: ${({ margin }) => margin || 0};
`;

export const BackgroundIcon = styled.img`
  position: absolute;
  z-index: -1;
`;
