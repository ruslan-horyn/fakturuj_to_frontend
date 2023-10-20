import { useFormik } from 'formik';
import { useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ROUTES } from '../config/constants';
import { ProductsForm, ProductsFormValues } from '../form/ProductsForm';
import { Product, ProductCategory } from '../models/products.types';
import { productFormValidationSchema } from '../schemas/product.validation.schema';
import { formatDateValue } from '../utils/formatDateValue';
import { useProductsViewController } from '../viewControllers/useProductViewControler';

const defaultValues: ProductsFormValues = {
  name: '',
  price: 0,
  category: '' as ProductCategory,
  count: 0,
  description: '',
  productionDate: '',
}

export default function UpdateProduct() {
  const { id } = useParams<{ id: string }>();
  const { products, updateProduct } = useProductsViewController()
  
  const [foundedProduct] = useMemo(() => products.filter((product: Product) => product.id === id), [id, products]);

  const formik = useFormik<ProductsFormValues>({
    initialValues: {
      ...defaultValues,
    },
    validationSchema: productFormValidationSchema,
    onSubmit: async values => {
      await updateProduct({ id: id as string, product: values })
    },
  });

  useEffect(() => {
    if (foundedProduct) {
      formik.setValues({
        ...foundedProduct,
        productionDate: formatDateValue(foundedProduct.productionDate)
      })
    }
  }, [foundedProduct])

  return (
    <>
      <Link to={ROUTES.PRODUCTS}>{'< Back to product'}</Link>
      <h1>Update {id} product</h1>
      <ProductsForm formik={formik} />
    </>
  )
}