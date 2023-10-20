import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { ProductsForm, ProductsFormValues } from '../form/ProductsForm';
import { ProductCategory } from '../models/products.types';
import { productFormValidationSchema } from '../schemas/product.validation.schema';
import { useProductsViewController } from '../viewControllers/useProductViewControler';

export default function AddProduct() {
  const { createProduct } = useProductsViewController()

  const formik = useFormik<ProductsFormValues>({
    initialValues: {
      name: '',
      price: 0,
      category: '' as ProductCategory,
      count: 0,
      description: '',
      productionDate: '',
    },
    validationSchema: productFormValidationSchema,
    onSubmit: async values => {
      return await createProduct(values)
    },
  });

  return (
    <>
      <Link to={'/products'}>{'< Back to product'}</Link>
      <h1>Add new product</h1>
      <ProductsForm formik={formik} />
    </>
  )
}
