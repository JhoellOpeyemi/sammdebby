import styled from "styled-components";

export const CardContainer = styled.div`
  width: 90%;
  padding: 2rem 1.75rem;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 1rem;
  text-align: center;
  background-color: ${({ theme }) => theme.color.bgColor};
  text-transform: capitalize;
  margin: 0 auto;

  a {
    width: 100%;
  }

  @media (min-width: ${({ theme }) => theme.break.tab}) {
    width: 65%;
    padding: 2.5rem 2rem;
  }
`;

export const CardType = styled.h4`
  font-family: "Poppins SemiBold";
  font-size: clamp(
    ${({ theme }) => theme.fontSize.medium},
    2vw + 0.5rem,
    ${({ theme }) => theme.fontSize.xMedium}
  );
  margin-bottom: 1.35rem;
  color: ${({ theme }) => theme.color.veryLightBlack};

  @media (min-width: ${({ theme }) => theme.break.tab}) {
    margin-bottom: 1.6rem;
  }
`;

export const Price = styled.p`
  font-family: "Poppins SemiBold";
  font-size: clamp(
    ${({ theme }) => theme.fontSize.large},
    2vw + 0.5rem,
    ${({ theme }) => theme.fontSize.xLarge}
  );
  color: ${({ theme }) => theme.color.black};
`;

export const BenefitsGroup = styled.div`
  margin: 2rem 0 2rem 0;
  border-block: 1px solid rgba(0, 0, 0, 0.15);

  @media (min-width: ${({ theme }) => theme.break.tab}) {
    margin: 2rem 0 2.5rem;
  }
`;

export const Benefit = styled.p`
  font-size: clamp(
    1.125rem,
    2vw + 0.5rem,
    ${({ theme }) => theme.fontSize.medium}
  );
  font-family: "Ink Free Regular";
  padding: 1rem 0;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  }

  @media (min-width: ${({ theme }) => theme.break.tab}) {
    padding: 1.25rem 0;
  }
`;
