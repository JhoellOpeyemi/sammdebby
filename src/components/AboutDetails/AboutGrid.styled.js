import styled from "styled-components";

export const Grid = styled.div`
  overflow: hidden;
  display: grid;
  gap: 2.5rem;
  grid-template-areas: "first" "second" "third" "fourth" "six" "five";
`;

export const GridItems = styled.div`
  &:nth-child(1) {
    grid-area: first;
  }

  &:nth-child(2) {
    grid-area: second;
    justify-self: end;
  }

  &:nth-child(3) {
    grid-area: third;
  }

  &:nth-child(4) {
    grid-area: fourth;
  }

  &:nth-child(5) {
    grid-area: five;
  }

  &:nth-child(6) {
    grid-area: six;
  }
`;
