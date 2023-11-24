import styled, { css } from "styled-components";

export const NavWrapper = styled.div`
  padding: 2.5rem 7.5%;
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

export const Name = styled.p`
  font-family: "Ink Free Regular";
  font-size: 1.15rem;
  color: #eee;
  z-index: 5;
  cursor: pointer;
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
  background-color: #111;
  padding: 0 7.5%;

  div {
    width: 100%;
    height: 1px;
    background-color: #eee;
    margin: 2.5rem 0;
  }

  ${({ nav }) =>
    nav === false &&
    css`
      display: none;
    `};
`;

export const StyledNavLinks = styled.a`
  font-family: "Poppins Medium";
  text-transform: uppercase;
  color: #eee;
  text-decoration: none;
  font-size: 1.75rem;
`;

export const Hamburger = styled.button`
  cursor: pointer;
  background: none;
  border: 0;
  z-index: 5;
`;

export const StyledSvg = styled.svg``;
