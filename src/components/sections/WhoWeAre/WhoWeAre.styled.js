import styled from "styled-components";

export const StyledSection = styled.section`
  position: relative;
  padding: 4rem 0 4.75rem 0;

  .bgIcon {
    top: 19%;
    right: -3rem;
    width: 20rem;
    height: 20rem;
  }

  @media (min-width: ${({ theme }) => theme.break.tab}) {
    .bgIcon {
      top: 8%;
      right: -4rem;
      width: 27rem;
      height: 27rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.break.desktop}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 7rem;
    padding: 5rem 0;

    .bgIcon {
      top: unset;
      right: unset;
      bottom: -12rem;
      left: 35%;
      width: 32rem;
      height: 32rem;
    }
  }
`;

export const TextGroup = styled.div`
  margin-bottom: 2.5rem;
`;

export const TextAndButton = styled.div``;

export const SliderContainer = styled.div`
  margin-top: 4rem;
  overflow: hidden;
  display: flex;

  @media (min-width: ${({ theme }) => theme.break.desktop}) {
    margin-top: 0;
    width: 65%;
  }
`;
