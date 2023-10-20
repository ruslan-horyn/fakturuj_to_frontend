import { FC } from "react";
import { Link } from "react-router-dom";
import { ProductList } from "../components/ProductList/ProductList";
import { Button } from "../ui/Button";

const Products: FC = () => {

  return (
    <>
      <h1>Products:</h1>

      <Link to={'/products/add'} >
        <Button>
          Add new product
        </Button>
      </Link>

      <ProductList />
    </>
  )
};

export default Products;