import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Button = styled(Link)`
  background: none;
  display: inline-block;
  color: ${({ theme }) => theme.color.secondary};
  text-transform: uppercase;
  font-size: clamp(
    ${({ theme }) => theme.fontSize.normal},
    1.25vw + 0.5rem,
    ${({ theme }) => theme.fontSize.xMedium}
  );
  font-family: "Poppins Medium";

  ${({ type }) =>
    type === "primary" &&
    css`
      position: relative;
      border: 0;
      letter-spacing: 2px;

      &::before {
        content: "";
        position: absolute;
        bottom: -0.5rem;
        left: 0;
        width: 75%;
        height: 1px;
        background-color: ${({ theme }) => theme.color.secondary};
      }
    `}

  ${({ type }) =>
    type === "secondary" &&
    css`
      border: 1px solid #7e83fd;
      border-radius: 0.75rem;
      letter-spacing: 4px;
      padding: 0.75rem 1rem;

      @media (min-width: ${({ theme }) => theme.break.tab}) {
        padding: 1rem 1.25rem;
      }
    `}
`;
