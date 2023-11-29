import styled from "styled-components";

export const QuoteWrapper = styled.section`
  background-color: rgba(0, 0, 0, 0.98);
  text-align: center;
  padding: 8.75rem 0;

  p {
    color: ${({ theme }) => theme.color.white};
  }

  @media (min-width: ${({ theme }) => theme.break.desktop}) {
    padding: 10rem 13rem;
  }
`;
