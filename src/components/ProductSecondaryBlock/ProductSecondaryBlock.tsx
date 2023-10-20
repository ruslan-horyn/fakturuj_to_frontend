import { FC } from "react";
import { Product } from "../../models/products.types";
import {
  ContainerStyled,
  ContentStyled,
  Info,
  Title
} from "./ProductSecondaryBlock.styled";


export const ProductSecondaryBlock: FC<{ product: Product }> = ({ product }) => {
  const { price, count, productionDate } = product;
  return (
    <ContainerStyled>
      <ContentStyled>
        <Title>Production date:  </Title>
        <Info>{new Date(productionDate).toLocaleDateString()}</Info>
      </ContentStyled>
      <ContentStyled>
        <Title>Price:</Title>
        <Info>{price} $</Info>
      </ContentStyled>
      <ContentStyled>
        <Title>Count: </Title>
        <Info>{count}</Info>
      </ContentStyled>
    </ContainerStyled>
  )
}
