import { FC } from 'react';
import { Product } from '../models/products.types';
import { Button } from '../ui/Button';

type ProductProps = {
  onClose?: () => void
  product: Product
}

const ProductInfo: FC<ProductProps> = ({
  onClose: goBack = () => { },
  product
}) => {
  const { name, count, description, price, productionDate, category } = product

  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Price: {price}</p>
      <p>Count: {count}</p>
      <p>Production date: {new Date(productionDate).toLocaleDateString()}</p>
      <p>Category: {category}</p>
      <p>Description: {description}</p>
      <Button onClick={goBack}>{'< Back to products'}</Button>
    </div>
  )
}

export default ProductInfo;
