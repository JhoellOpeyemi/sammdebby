import styled, { css } from "styled-components";

export const StyledText = styled.p`
  font-family: "Poppins Regular";
  font-size: clamp(
    ${({ theme }) => theme.fontSize.normal},
    2vw + 0.6rem,
    ${({ theme }) => theme.fontSize.largeText}
  );
  color: ${({ theme }) => theme.color.text};
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? marginBottom : "1rem"};

  ${({ type }) =>
    type === "medium" &&
    css`
      font-size: clamp(
        ${({ theme }) => theme.fontSize.medium},
        2vw + 0.5rem,
        ${({ theme }) => theme.fontSize.xLarge}
      );
    `}
`;

export const SectionHeading = styled.h2`
  font-family: "Poppins Bold";
  font-size: clamp(
    ${({ theme }) => theme.fontSize.sectionHeading},
    2vw + 0.85rem,
    ${({ theme }) => theme.fontSize.largeSectionHeading}
  );
  color: ${({ theme }) => theme.color.text};
  text-transform: uppercase;
  margin-bottom: 2rem;

  @media (min-width: ${({ theme }) => theme.break.tab}) {
    margin-bottom: 2.5rem;
  }
`;

export const PageHeading = styled.h1`
  font-family: "Poppins Bold";
  font-size: clamp(
    ${({ theme }) => theme.fontSize.pageHeading},
    4vw + 0.85rem,
    ${({ theme }) => theme.fontSize.largePageHeading}
  );
  color: ${({ theme }) => theme.color.veryLightBlack};
  text-transform: uppercase;
  margin-bottom: 2.75rem;

  @media (min-width: ${({ theme }) => theme.break.desktop}) {
    margin-bottom: 5rem;
  }
`;
