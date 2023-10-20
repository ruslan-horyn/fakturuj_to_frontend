import styled from "styled-components";

export const ProductCTABlockStyled = styled.div`
  display: flex;
  padding: 0 0.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  @media (max-width: 40.625rem) {
    flex-direction: row;
  }
`;

export const LinkContainer = styled.div`
  cursor: pointer;
`;


