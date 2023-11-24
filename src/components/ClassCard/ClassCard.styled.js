import styled from "styled-components";

export const CardContainer = styled.div`
  width: 90%;
  padding: 2rem 1.75rem;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 1rem;
  text-align: center;
  background-color: #fbfbfb;
  text-transform: capitalize;
  margin: 0 auto;

  button {
    width: 100%;
  }
`;

export const CardType = styled.h4`
  font-family: "Poppins SemiBold";
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: #888;
`;

export const Price = styled.p`
  font-family: "Poppins SemiBold";
  font-size: 1.75rem;
  color: #222;
`;

export const BenefitsGroup = styled.div`
  margin: 2rem 0 2rem 0;
  border-block: 1px solid rgba(0, 0, 0, 0.15);
`;

export const Benefit = styled.p`
  font-size: 1.125rem;
  font-family: "Ink Free Regular";
  padding: 1rem 0;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  }
`;
