import styled from "styled-components";

export const ExecCardContainer = styled.div`
  padding: 2.25rem 1.25rem;
  width: 90%;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 1rem;
  text-align: center;
  background-color: ${({ theme }) => theme.color.bgColor};
  margin: 0 auto;

  & > div {
    margin: 0 auto 0.8rem;
    border-radius: 45% 45% 5% 5%;
    overflow: hidden;
  }

  .position {
    font-style: italic;
    color: ${({ theme }) => theme.color.veryLightBlack};
  }
`;

// export const StyledPosition = styled.p``;

// export const StyledDesc = styled.p``;
