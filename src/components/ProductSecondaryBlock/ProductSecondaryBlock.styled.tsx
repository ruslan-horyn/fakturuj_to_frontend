import { styled } from "styled-components"

export const ContainerStyled = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;

  @media (max-width: 40.625rem) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    text-align: left;
    gap: 0.5rem;
  }
`;
export const ContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media (max-width: 40.625rem) {
    flex-direction: row;
  }
`;

export const Title = styled.p`
  margin: 0;
  font-size: 0.9rem;
  font-weight: 600;
  white-space: nowrap;
`;

export const Info = styled.p`
  margin: 0;
  font-size: 0.8rem;
`;
