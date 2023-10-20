import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { Product, ProductFormBody } from "../../models/products.types"
import { RootState } from ".."

const BASE_URL = `${import.meta.env.VITE_API_URL}/api/v1`
const productsAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json"
  },
})

export const getAllProductsAction = createAsyncThunk<Product[] | undefined>("products/getAllProducts", async (_, api) => {
  const { products } = api.getState() as RootState
  if (products.status !== 'pending' || products.requestId !== api.requestId) {
    return
  }
  return await productsAPI.get<Product[]>("products")
    .then((res) => res.data)
    .catch((err) => api.rejectWithValue(err.response.data.message))
});

export const getProductAction = createAsyncThunk<Product, { id: string }>("products/getProduct", async ({ id }, api) => {
  return await productsAPI.get<Product>(`products/${id}`)
    .then((res) => res.data)
    .catch((err) => api.rejectWithValue(err.response.data.message))
});

export const createProductAction = createAsyncThunk<Product, ProductFormBody>("products/createProduct", async (product, api) => {
  return await productsAPI.post<Product>("products", product)
    .then((res) => res.data)
    .catch((err) => api.rejectWithValue(err.response.data.message))
});

export const updateProductAction = createAsyncThunk<Product, { id: string, product: ProductFormBody }>("products/updateProduct", async ({ id, product }, api) => {
  return await productsAPI.patch<Product>(`products/${id}`, product)
    .then((res) => res.data)
    .catch((err) => api.rejectWithValue(err.response.data.message))
});

export const deleteProductAction = createAsyncThunk<{ id: string }, string>("products/deleteProduct", async (id, api) => {
  return await productsAPI.delete(`products/${id}`)
    .then(() => ({ id }))
    .catch((err) => api.rejectWithValue(err.response.data.message))
});
