import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../config/constants';
import { useProductViewModel } from "../viewModels/useProductViewModel";

export const useProductsViewController = () => {
  const navigate = useNavigate();
  const { getAllProducts, createProduct, updateProduct, deleteProduct, ...rest } = useProductViewModel();

  const createProductHandler = (...args: Parameters<typeof createProduct>) => createProduct(...args)
    .then(() => navigate(ROUTES.PRODUCTS));

  const updateProductHandler = (...args: Parameters<typeof updateProduct>) => updateProduct(...args)
    .then(() => navigate(ROUTES.PRODUCTS));

  const deleteProductHandler = (...args: Parameters<typeof deleteProduct>) => deleteProduct(...args)
    .then(() => navigate(ROUTES.PRODUCTS));

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  return {
    ...rest,
    createProduct: createProductHandler,
    updateProduct: updateProductHandler,
    deleteProduct: deleteProductHandler,
  };
};