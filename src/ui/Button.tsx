import { styled } from "styled-components";

export const Button = styled.button`
  min-width: 72px;
  padding: 0.5em;
  border-radius: 0.1875rem;
  outline: none;
  font-family: inherit;
  cursor: pointer;
  border: 0.125rem solid #caced1;
  transition: border-color 0.2s ease-in-out, background-color 0.2s ease-in-out;
  background-color: #fff;

  &:hover {
    border-color:#ACBCC8;
  }

  &:active, &:focus {
    border-color:  #4545FF;
  }
`;
