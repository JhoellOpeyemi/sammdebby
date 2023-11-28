import styled, { css } from "styled-components";

export const StyledText = styled.p`
  font-family: "Poppins Regular";
  font-size: ${({ theme }) => theme.fontSize.normal};
  color: ${({ theme }) => theme.color.text};
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? marginBottom : "1rem"};

  ${({ type }) =>
    type === "medium" &&
    css`
      font-size: ${({ theme }) => theme.fontSize.medium};
    `}
`;

export const SectionHeading = styled.h2`
  font-family: "Poppins Bold";
  font-size: ${({ theme }) => theme.fontSize.sectionHeading};
  color: ${({ theme }) => theme.color.text};
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

export const PageHeading = styled.h1`
  font-family: "Poppins Bold";
  font-size: ${({ theme }) => theme.fontSize.pageHeading};
  color: ${({ theme }) => theme.color.veryLightBlack};
  text-transform: uppercase;
  margin-bottom: 2.75rem;
`;
