import styled, { css } from "styled-components";

export const Button = styled.button`
  background: none;
  color: #7e83fd;
  text-transform: uppercase;
  font-size: 1rem;
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
        background-color: #7e83fd;
      }
    `}

  ${({ type }) =>
    type === "secondary" &&
    css`
      border: 1px solid #7e83fd;
      border-radius: 1rem;
      letter-spacing: 4px;
      padding: 0.75rem 1rem;
    `}
`;
