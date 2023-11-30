import styled from "styled-components";

export const HeadingsSlide = styled.div`
  display: flex;
  overflow: hidden;
  white-space: nowrap;
`;

export const Headings = styled.div`
  animation: slide 25s linear infinite;
  padding-right: 5rem;

  @media (min-width: ${({ theme }) => theme.break.tab}) {
    padding-right: 15rem;
  }

  @keyframes slide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;
