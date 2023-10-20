import styled from "styled-components";

export const Select = styled.select`
  padding: 0.5em;
  border: 0.125rem solid #caced1;
  border-radius: 0.1875rem;
  outline: none;
  cursor: pointer;
  font-family: inherit;

  &:hover {
    border-color:#ACBCC8;
  }

  &:active, &:focus {
    border-color:#4545FF;
  }
`;
