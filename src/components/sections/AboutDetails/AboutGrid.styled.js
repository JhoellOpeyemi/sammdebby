import styled from "styled-components";

export const Grid = styled.div`
  width: 100%;
  overflow: hidden;
  display: grid;
  gap: 2.5rem;
  grid-template-areas: "first" "second" "third" "fourth" "six" "five";

  @media (min-width: ${({ theme }) => theme.break.desktop}) {
    gap: 0;
    grid-template-columns: repeat(16, 6.25%);
    grid-template-rows: repeat(28, 72px);
  }
`;

export const GridItems = styled.div`
  &:nth-child(1) {
    grid-area: first;
  }

  &:nth-child(2) {
    grid-area: second;
    justify-self: end;
    width: 60%;

    img {
      height: 22rem;
    }
  }

  &:nth-child(3) {
    grid-area: third;
  }

  &:nth-child(4) {
    grid-area: fourth;
    justify-self: start;
    width: 70%;

    img {
      height: 22rem;
    }
  }

  &:nth-child(5) {
    grid-area: five;
    justify-self: center;
    width: 85%;

    img {
      height: 19rem;
    }
  }

  &:nth-child(6) {
    grid-area: six;
  }

  @media (min-width: ${({ theme }) => theme.break.tab}) {
    &:nth-child(2) {
      width: 50%;

      img {
        height: 26rem;
      }
    }

    &:nth-child(4) {
      width: 55%;

      img {
        height: 29rem;
      }
    }

    &:nth-child(5) {
      width: 75%;

      img {
        height: 22rem;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.break.desktop}) {
    &:nth-child(1) {
      grid-row: 1 / 5;
      grid-column: 1 / 10;
    }

    &:nth-child(2) {
      grid-row: 2 / 9;
      grid-column: 11 / 16;
      width: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }

    &:nth-child(4) {
      grid-row: 6 / 13;
      grid-column: 2 / 7;
      width: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }

    &:nth-child(3) {
      grid-row: 11 / 18;
      grid-column: 9 / 17;
    }

    &:nth-child(5) {
      grid-row: 19 / 25;
      grid-column: 4 / 14;
      width: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }

    &:nth-child(6) {
      grid-row: 26 / 29;
      grid-column: 4 / 14;
    }
  }
`;
