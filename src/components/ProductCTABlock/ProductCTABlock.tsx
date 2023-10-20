import { FC } from "react";
import { Link } from "react-router-dom";
import Edit from "../../assets/edit.svg?react";
import Info from "../../assets/info.svg?react";
import Trash from "../../assets/trash.svg?react";
import { useProductModal } from "../../hooks/useProductModal";
import { Product } from "../../models/products.types";
import { LinkContainer, ProductCTABlockStyled } from "./ProductCTABlock.styled";

type ProductCTABlockProps = {
  product: Product,
  onDelete: (id: string) => void
};

export const ProductCTABlock: FC<ProductCTABlockProps> = ({ product, onDelete }) => {
  const { id } = product;
  const { ProductModal, openModal } = useProductModal(product)
  return (
    <>
      <ProductModal />
      <ProductCTABlockStyled>
        <LinkContainer>
          <Info onClick={openModal} />
        </LinkContainer>

        <LinkContainer>
          <Link to={`/products/${id}/edit`}><Edit /></Link>
        </LinkContainer>

        <LinkContainer>
          <Trash onClick={() => onDelete(id)} />
        </LinkContainer>
      </ProductCTABlockStyled>
    </>
  )
}
