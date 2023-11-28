import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const NavWrapper = styled.div`
  padding: 2.2rem 0;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: min(85%, 1240px);
  mix-blend-mode: normal;
  z-index: 5;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  ${({ nav }) =>
    nav === false &&
    css`
      mix-blend-mode: difference;
    `};

  @media (min-width: ${({ theme }) => theme.break.tab}) {
    mix-blend-mode: difference;
    padding: 3.75rem 0;
  }
`;

export const Name = styled(NavLink)`
  font-family: "Ink Free Regular";
  font-size: clamp(
    ${({ theme }) => theme.fontSize.medium},
    2vw + 0.45rem,
    ${({ theme }) => theme.fontSize.xLarge}
  );
  color: ${({ theme }) => theme.color.white};
  z-index: 5;
`;

export const StyledNav = styled.nav`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.black};

  ${({ nav }) =>
    nav === false &&
    css`
      display: none;
    `};

  @media (min-width: ${({ theme }) => theme.break.tab}) {
    position: relative;
    left: 0;
    transform: translateX(0);
    flex-direction: row;
    justify-content: flex-end;
    gap: 4.5rem;
    width: fit-content;
    height: 100%;
    background-color: transparent;
    mix-blend-mode: difference;

    div {
      display: none;
    }
  }
`;

export const StyledNavLinks = styled(NavLink)`
  font-family: "Poppins Medium";
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.large};

  &.active {
    pointer-events: none;
    color: ${({ theme }) => theme.color.veryLightBlack};
  }

  @media (min-width: ${({ theme }) => theme.break.tab}) {
    font-family: "Poppins Regular";
    text-transform: capitalize;
    font-size: clamp(
      ${({ theme }) => theme.fontSize.medium},
      2vw + 0.2rem,
      ${({ theme }) => theme.fontSize.large}
    );
    color: ${({ theme }) => theme.color.offWhite};

    &.active {
      pointer-events: none;
      color: ${({ theme }) => theme.color.white};
    }
  }
`;

export const Hamburger = styled.button`
  cursor: pointer;
  background: none;
  border: 0;
  z-index: 5;

  @media (min-width: ${({ theme }) => theme.break.tab}) {
    display: none;
  }
`;

export const StyledSvg = styled.svg``;
