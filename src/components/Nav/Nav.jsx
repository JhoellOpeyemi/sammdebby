import { useState } from "react";

import {
  Hamburger,
  Name,
  NavWrapper,
  StyledNav,
  StyledNavLinks,
  StyledSvg,
} from "./Nav.styled";
import { StyledDivider } from "../../styled/Utils.styled";

const Nav = () => {
  const [nav, setNav] = useState(false);

  const navHandler = () => {
    setNav(!nav);
  };

  return (
    <NavWrapper nav={nav}>
      <Name>SammDebby</Name>

      <StyledNav nav={nav}>
        <StyledNavLinks href="/">Home</StyledNavLinks>
        <StyledDivider color="#eee" margin="2.5rem 0" />
        <StyledNavLinks href="/">Who We Are</StyledNavLinks>
        <StyledDivider color="#eee" margin="2.5rem 0" />
        <StyledNavLinks href="/">Our Classes</StyledNavLinks>
      </StyledNav>

      <Hamburger onClick={navHandler}>
        {nav === false && (
          <StyledSvg
            width="34"
            height="25"
            viewBox="0 0 34 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="17" width="17" height="3" rx="1.5" fill="#EEEEEE" />
            <rect y="10.5217" width="34" height="3" rx="1.5" fill="#EEEEEE" />
            <rect y="21.0435" width="17" height="3" rx="1.5" fill="#EEEEEE" />
          </StyledSvg>
        )}
        {nav === true && (
          <StyledSvg
            width="27"
            height="28"
            viewBox="0 0 27 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="12.0815"
              y="13.0208"
              width="17"
              height="3"
              rx="1.5"
              transform="rotate(-45 12.0815 13.0208)"
              fill="#EEEEEE"
            />
            <rect
              x="2.12134"
              y="0.940247"
              width="34"
              height="3"
              rx="1.5"
              transform="rotate(45 2.12134 0.940247)"
              fill="#EEEEEE"
            />
            <rect
              x="0.081543"
              y="25.0208"
              width="17"
              height="3"
              rx="1.5"
              transform="rotate(-45 0.081543 25.0208)"
              fill="#EEEEEE"
            />
          </StyledSvg>
        )}
      </Hamburger>
    </NavWrapper>
  );
};

export default Nav;
