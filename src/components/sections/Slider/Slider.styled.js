import styled from "styled-components";

export const StyledSlider = styled.div`
  display: flex;
  flex-wrap: nowrap;
  animation: slide 25s linear infinite;

  & > div {
    margin-right: 1.375rem;
    flex-shrink: 0;
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
