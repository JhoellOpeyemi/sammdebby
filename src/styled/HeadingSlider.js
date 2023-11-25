import styled from "styled-components";

export const HeadingsSlide = styled.div`
  display: flex;
  overflow: hidden;
  white-space: nowrap;
`;

export const Headings = styled.div`
  animation: slide 18s linear infinite;
  padding-right: 5rem;

  @keyframes slide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;
