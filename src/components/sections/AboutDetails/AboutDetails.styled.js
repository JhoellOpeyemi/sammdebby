import styled from "styled-components";

export const AboutDetailsContainer = styled.main`
  position: relative;
  padding: 7rem 0 4.5rem;

  .bgIcon3 {
    top: 28%;
    left: -2rem;
    width: 19rem;
    height: 19rem;
  }

  .bgIcon1 {
    top: 64%;
    right: -3rem;
    width: 19rem;
    height: 19rem;
  }

  @media (min-width: ${({ theme }) => theme.break.tab}) {
    padding: 9rem 0 5.5rem;
  }

  @media (min-width: ${({ theme }) => theme.break.desktop}) {
    padding: 12rem 0 5.5rem;

    .bgIcon3 {
      top: 33%;
      left: 37%;
      width: 23rem;
      height: 23rem;
    }

    .bgIcon1 {
      display: none;
    }
  }
`;
