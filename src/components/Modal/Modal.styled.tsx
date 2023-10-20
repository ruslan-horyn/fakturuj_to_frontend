import { styled } from "styled-components";

export const ModalContainerStyled = styled.dialog`
  width: 80%;
  height: 80%;
`;

export const ModalContendStyled = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  padding: 1rem;
  overflow: auto;
`;