import { FC } from "react";
import { Product } from "../../models/products.types";
import { ProductMainBlockCategoryStyled, ProductMainBlockContainerStyled, ProductMainBlockHeaderStyled, ProductSecondaryBlockTextStyled } from "./ProductMainBlock.styled";

export const ProductMainBlock: FC<{ product: Product }> = ({ product }) => {
  const { name, description, category } = product;
  return (
    <ProductMainBlockContainerStyled>
      <ProductMainBlockHeaderStyled>{name}</ProductMainBlockHeaderStyled>
      <ProductMainBlockCategoryStyled>Category: {category}</ProductMainBlockCategoryStyled>
      <ProductSecondaryBlockTextStyled>Description: {description}</ProductSecondaryBlockTextStyled>
    </ProductMainBlockContainerStyled>
  )
}
