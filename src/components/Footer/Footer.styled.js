import styled from "styled-components";

export const FooterContainer = styled.div`
  padding: 3rem 0 2rem;
`;

export const Address = styled.div`
  h5 {
    font-family: "Poppins SemiBold";
    font-size: ${({ theme }) => theme.fontSize.mobile.medium};
    text-transform: uppercase;
    margin: 0 0 1rem;
  }
`;

export const Contact = styled.div`
  margin: 2rem 0;

  h5 {
    font-family: "Poppins SemiBold";
    font-size: ${({ theme }) => theme.fontSize.mobile.medium};
    text-transform: uppercase;
    margin: 0 0 1rem;
  }
`;

export const LinksGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  a {
    font-family: "Poppins Regular";
    font-size: ${({ theme }) => theme.fontSize.mobile.normal};
    margin-bottom: 1rem;
  }
`;

export const Copyright = styled.div`
  font-family: "Poppins Regular";
  font-size: 0.935rem;
  text-align: center;
  color: ${({ theme }) => theme.color.veryLightBlack};
`;
