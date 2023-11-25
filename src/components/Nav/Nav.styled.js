import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const NavWrapper = styled.div`
  padding: 2.2rem 7.5%;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
  mix-blend-mode: ${({ nav }) => (nav === true ? "normal" : "difference")};
`;

export const Name = styled(NavLink)`
  font-family: "Ink Free Regular";
  font-size: ${({ theme }) => theme.fontSize.mobile.medium};
  color: ${({ theme }) => theme.color.white};
  z-index: 5;
`;

export const StyledNav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.black};
  padding: 0 7.5%;

  ${({ nav }) =>
    nav === false &&
    css`
      display: none;
    `};
`;

export const StyledNavLinks = styled(NavLink)`
  font-family: "Poppins Medium";
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.mobile.large};

  &.active {
    pointer-events: none;
    color: ${({ theme }) => theme.color.veryLightBlack};
  }
`;

export const Hamburger = styled.button`
  cursor: pointer;
  background: none;
  border: 0;
  z-index: 5;
`;

export const StyledSvg = styled.svg``;
