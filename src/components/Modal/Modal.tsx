import { PropsWithChildren, forwardRef } from "react";
import { ModalContainerStyled } from "./Modal.styled";

export const Modal = forwardRef<HTMLDialogElement, PropsWithChildren>(({ children }, ref) => {
  return (
    <ModalContainerStyled ref={ref}>
      {children}
    </ModalContainerStyled>
  );
});