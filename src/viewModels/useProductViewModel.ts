import { useCallback } from "react";
import { useProductModel } from "../models/useProductModel";
import { handleActionError } from "../utils/handleActionError";
import { handleSuccess } from "../utils/handleSuccess";

export const useProductViewModel = () => {
  const { createProduct, updateProduct, deleteProduct, getProduct, getAllProducts, ...rest } = useProductModel();

  const getAllProductsModel = useCallback(() => getAllProducts()
    .catch((err) => {
      handleActionError(err);
      return Promise.reject(err);
    }),
    [getAllProducts],
  );

  const getProductModel = useCallback((...args: Parameters<typeof getProduct>) => getProduct(...args)
    .catch((err) => {
      handleActionError(err);
      return Promise.reject(err);
    }), [getProduct]);

  const createProductModel = useCallback((...args: Parameters<typeof createProduct>) => createProduct(...args)
    .then(() => handleSuccess('Products has been created'))
    .catch((err) => {
      handleActionError(err);
      return Promise.reject(err);
    }), [createProduct]);

  const updateProductModel = useCallback((args: Parameters<typeof updateProduct>[0]) => updateProduct(args)
    .then(() => handleSuccess('Products has been updated'))
    .catch((err) => {
      handleActionError(err);
      return Promise.reject(err);
    }), [updateProduct]);

  const deleteProductModel = useCallback((...args: Parameters<typeof deleteProduct>) => deleteProduct(...args)
    .then(() => handleSuccess('Products has been deleted'))
    .catch((err) => {
      handleActionError(err);
      return Promise.reject(err);
    }), [deleteProduct]);

  return {
    ...rest,
    getProduct: getProductModel,
    getAllProducts: getAllProductsModel,
    createProduct: createProductModel,
    updateProduct: updateProductModel,
    deleteProduct: deleteProductModel,
  };
};