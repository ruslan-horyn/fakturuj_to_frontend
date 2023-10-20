import { List } from "../../ui/List";
import { ListItem } from "../../ui/ListItem";
import { useProductsViewController } from "../../viewControllers/useProductViewControler";
import { ProductCTABlock } from "../ProductCTABlock/ProductCTABlock";
import { ProductMainBlock } from "../ProductMainBlock/ProductMainBlock";
import { ProductSecondaryBlock } from "../ProductSecondaryBlock/ProductSecondaryBlock";

export const ProductList = () => {
  const { products, deleteProduct } = useProductsViewController();
  return (
    <List>
      {products.map(product => (
        <ListItem key={product.id}>
          <ProductMainBlock product={product}/>
          <ProductSecondaryBlock product={product}/>
          <ProductCTABlock product={product} onDelete={deleteProduct}/>
        </ListItem>
      ))}
    </List>
  );
};