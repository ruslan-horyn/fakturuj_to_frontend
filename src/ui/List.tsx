import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;

  & > li {
    list-style: none;
  }
`;
