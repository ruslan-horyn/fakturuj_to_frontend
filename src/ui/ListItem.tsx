import styled from "styled-components";

export const ListItem = styled.li`
  display: flex;
  padding: 0.5em;
  border-radius: 0.1875rem;
  outline: none;
  font-family: inherit;
  border: 2px solid #caced1;

  &:hover {
    border: 0.125rem solid #4545FF;
  }

  @media (max-width: 40.625rem) {
    flex-direction: column;
  }
`;
