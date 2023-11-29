import styled from "styled-components";

export const ClassesSection = styled.section`
  position: relative;
  padding: 4rem 0;

  .link {
    text-align: center;
  }

  .bgIcon {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.break.tab}) {
    .bgIcon {
      display: inline-block;
      top: 48%;
      right: -5rem;
      width: 23rem;
      height: 23rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.break.desktop}) {
    padding: 5rem 0;

    h2,
    .text {
      text-align: center;
    }

    .text {
      width: 75%;
      margin: 0 auto 1rem;
    }

    .bgIcon {
      display: inline-block;
      top: unset;
      right: unset;
      left: 0;
      bottom: 0;
      width: 28rem;
      height: 28rem;
    }
  }
`;

export const CardGroup = styled.div`
  margin: 4.5rem 0 2.5rem 0;

  & > div {
    &:not(:last-child) {
      margin-bottom: 3.5rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.break.desktop}) {
    width: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    margin: 4.5rem auto 4rem;

    & > div {
      &:not(:last-child) {
        margin-bottom: 0;
      }
    }
  }
`;
