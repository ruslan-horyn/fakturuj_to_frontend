import { useRef } from "react";
import { Modal } from "../components/Modal/Modal";
import { Product } from "../models/products.types";
import ProductInfo from "../view/ProductInfo";

export const useProductModal = (product: Product) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openModal = () => dialogRef.current?.showModal();

  const closeModal = () => dialogRef.current?.close();

  const ProductModal = () =>
    <Modal ref={dialogRef}>
      <ProductInfo key={product.id} product={product} onClose={closeModal} />
    </Modal>

  return {
    openModal,
    ProductModal
  };
};
