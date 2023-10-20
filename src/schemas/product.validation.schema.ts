import * as Yup from 'yup'
import { productsCategoryEntity } from '../models/products.types'

export const productFormValidationSchema = Yup.object().shape({
  name: Yup.string().required(),
  price: Yup.number().min(0).required(),
  count: Yup.number().min(0).required(),
  category: Yup.string().oneOf(Object.values(productsCategoryEntity)).required(),
  productionDate: Yup.date().required(),
  description: Yup.string().max(2000),
});
