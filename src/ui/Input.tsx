import styled from "styled-components";

export const Input = styled.input`
  padding: 0.5em;
  border-radius: 0.1875rem;
  outline: none;
  font-family: inherit;
  border: 2px solid #caced1;

  &:hover {
    border: 0.125rem solid #ACBCC8;
  }

  &:active, &:focus {
    border: 0.125rem solid #4545FF;
  }
  
`;
