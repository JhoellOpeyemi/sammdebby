import styled from "styled-components";

export const FooterContainer = styled.div`
  padding: 3rem 0 2rem;

  @media (min-width: ${({ theme }) => theme.break.tab}) {
    padding: 4rem 0;
    display: flex;
    align-items: flex-start;
    gap: 3.5rem;
  }
`;

export const Address = styled.div`
  width: 100%;

  h5 {
    font-family: "Poppins SemiBold";
    font-size: clamp(
      ${({ theme }) => theme.fontSize.medium},
      1.5vw + 0.5rem,
      ${({ theme }) => theme.fontSize.xMedium}
    );
    text-transform: uppercase;
    margin: 0 0 1rem;
  }

  @media (min-width: ${({ theme }) => theme.break.tab}) {
    h5 {
      margin: 0 0 1.6rem;
    }
  }
`;

export const Contact = styled.div`
  margin-top: 2.5rem;

  h5 {
    font-family: "Poppins SemiBold";
    font-size: clamp(
      ${({ theme }) => theme.fontSize.medium},
      1.5vw + 0.5rem,
      ${({ theme }) => theme.fontSize.xMedium}
    );
    text-transform: uppercase;
    margin: 0 0 1rem;
  }

  @media (min-width: ${({ theme }) => theme.break.tab}) {
    margin: 0;
    width: 100%;

    h5 {
      margin: 0 0 1.6rem;
    }
  }
`;

export const LinksGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 1.5rem;

  a {
    font-family: "Poppins Regular";
    font-size: clamp(
      ${({ theme }) => theme.fontSize.normal},
      2vw + 0.5rem,
      ${({ theme }) => theme.fontSize.largeText}
    );
  }

  @media (min-width: ${({ theme }) => theme.break.desktop}) {
    flex-direction: row;
    gap: 2.5rem;

    a {
      margin-bottom: 0;
    }
  }
`;

export const Copyright = styled.div`
  font-family: "Poppins Regular";
  font-size: clamp(0.935rem, 2vw + 0.5rem, 1.2rem);
  text-align: center;
  color: ${({ theme }) => theme.color.veryLightBlack};
  margin-bottom: 2rem;
`;
