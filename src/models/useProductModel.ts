import { useCallback } from 'react';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from "../hooks/useAppSelector";
import {
  createProductAction,
  deleteProductAction,
  getAllProductsAction,
  getProductAction,
  updateProductAction
} from './../store/products/actions';

export const useProductModel = () => {
  const productsState = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  const getAllProducts = useCallback(
    () => dispatch(getAllProductsAction()).unwrap(),
    [dispatch]
  );

  const getProduct = useCallback(
    (...arg: Parameters<typeof getProductAction>) => dispatch(getProductAction(...arg))
      .unwrap(),
    [dispatch]
  );

  const createProduct = useCallback(
    (...arg: Parameters<typeof createProductAction>) => dispatch(createProductAction(...arg))
      .unwrap(),
    [dispatch]
  );

  const updateProduct = useCallback(
    (...arg: Parameters<typeof updateProductAction>) => dispatch(updateProductAction(...arg))
      .unwrap(),
    [dispatch]
  );

  const deleteProduct = useCallback(
    (...arg: Parameters<typeof deleteProductAction>) => dispatch(deleteProductAction(...arg))
      .unwrap(),
    [dispatch]
  );

  return {
    ...productsState,
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
  }
};
