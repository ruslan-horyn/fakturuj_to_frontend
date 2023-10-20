import type { PayloadAction, } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { Product } from '../../models/products.types'
import { getAllProductsAction, createProductAction, updateProductAction, deleteProductAction } from './actions'

export interface ProductsState {
  products: Product[]
  status: 'idle' | 'pending' | 'succeeded' | 'failed'
  error: string
  requestId: string | null
}

const initialState: ProductsState = {
  products: [],
  status: "idle",
  error: "",
  requestId: null
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // allProducts
      .addCase(getAllProductsAction.pending, (state, { meta }) => {
        if (state.status === 'idle') {
          state.status = 'pending'
          state.requestId = meta.requestId
        }
      })
      .addCase(getAllProductsAction.fulfilled, (state, { payload, meta }) => {
        if (
          state.status === 'pending' &&
          state.requestId === meta.requestId
        ) {
          state.status = "succeeded"
          state.products = payload ?? state.products;
          state.requestId = null
        }
      })
      .addCase(getAllProductsAction.rejected, (state, { error, meta }) => {
        if (
          state.status === 'pending' &&
          state.requestId === meta.requestId
        ) {
          state.status = "failed"
          state.error = error.message || ""
          state.requestId = null
        }
      })
      // createProduct
      .addCase(createProductAction.pending, (state) => {
        state.status = "pending"
      })
      .addCase(createProductAction.fulfilled, (state, { payload }) => {
        state.status = "succeeded"
        state.products.push(payload)
      })
      .addCase(createProductAction.rejected, (state, { error }) => {
        state.status = "failed"
        state.error = error.message || ""
      })
      // updateProduct
      .addCase(updateProductAction.pending, (state) => {
        state.status = "pending"
      })
      .addCase(updateProductAction.fulfilled, (state, { payload }) => {
        state.status = "succeeded"
        state.products = state.products.map((product) => {
          if (product.id === payload.id) {
            return payload
          }
          return product
        })
      })
      .addCase(updateProductAction.rejected, (state, { error }) => {
        state.status = "failed"
        state.error = error.message || ""
      })
      // deleteProduct
      .addCase(deleteProductAction.pending, (state) => {
        state.status = "pending"
      })
      .addCase(deleteProductAction.fulfilled, (state, { payload }: PayloadAction<{ id: string }>) => {
        state.status = "succeeded"
        state.products = state.products.filter((product) => product.id !== payload.id)
      })
      .addCase(deleteProductAction.rejected, (state, { error }) => {
        state.status = "failed"
        state.error = error.message || ""
      })
  },
})

const productsReducer = productsSlice.reducer
export default productsReducer
