import styled, { css } from "styled-components";

export const StyledText = styled.p`
  font-family: "Poppins Regular";
  font-size: 1rem;
  color: ${({ color }) => color};
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? marginBottom : "1rem"};

  ${({ type }) =>
    type === "medium" &&
    css`
      font-size: 1.25rem;
    `}
`;

export const SectionHeading = styled.h2`
  font-family: "Poppins Bold";
  font-size: 1.375rem;
  color: #444;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;
