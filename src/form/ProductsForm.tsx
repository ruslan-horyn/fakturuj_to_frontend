import { FormikProps } from "formik";
import { FC } from "react";
import { ProductFormBody, productsCategoryEntity } from "../models/products.types";
import { Button } from "../ui/Button";
import { FormController } from "../ui/FormController";
import { Input } from "../ui/Input";
import { Label } from "../ui/Label";
import { Select } from "../ui/Select";
import { Textarea } from "../ui/Textarea";
import { formatDateValue } from "../utils/formatDateValue";
import { ErrorTip } from "../ui/FormError";

export type ProductsFormValues = ProductFormBody

type Props = {
  formik: FormikProps<ProductsFormValues>;
};

export const ProductsForm: FC<Props> = ({ formik }) => {
  const { values, errors, touched, handleSubmit, handleChange, } = formik;
  return (
    <form onSubmit={handleSubmit}>
      <FormController>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          type="name"
          onChange={handleChange}

          value={values.name}
        />
        {touched.name && errors.name ? <ErrorTip>{errors.name}</ErrorTip> : null}
      </FormController>

      <FormController>
        <Label htmlFor="category">Category</Label>
        <Select name="category" id="category" onChange={handleChange} value={values.category}>
          <option value="none" hidden>Select an Option</option>
          {Object.entries(productsCategoryEntity).map(([key, value]) => (
            <option key={key} value={value}>{value}</option>
          ))}
        </Select>
        {touched.category && errors.category ? <ErrorTip>{errors.category}</ErrorTip> : null}
      </FormController>

      <FormController>
        <Label htmlFor="price">Price</Label>
        <Input
          id="price"
          name="price"
          type="number"
          onChange={handleChange}
          min={0}

          value={values.price}
        />
        {touched.price && errors.price ? <ErrorTip>{errors.price}</ErrorTip> : null}
      </FormController>

      <FormController>
        <Label htmlFor="count">Count</Label>
        <Input
          id="count"
          name="count"
          type="number"
          onChange={handleChange}

          value={values.count}
          min={0}
        />
        {touched.count && errors.count ? <ErrorTip>{errors.count}</ErrorTip> : null}
      </FormController>

      <FormController>
        <Label htmlFor="productionDate">Production date</Label>
        <Input
          id="productionDate"
          name="productionDate"
          type="date"
          onChange={handleChange}

          value={formatDateValue(values.productionDate)}
        />
        {touched.productionDate && errors.productionDate ? <ErrorTip>{errors.productionDate}</ErrorTip> : null}
      </FormController>

      <FormController>
        <Label htmlFor="description">Description:</Label>
        <Textarea
          id="description"
          name="description"
          onChange={handleChange}
          value={values.description}
          maxLength={2000}
          rows={5}
        />
        {touched.description && errors.description ? <ErrorTip>{errors.description}</ErrorTip> : null}
      </FormController>
      <Button type="submit">Submit</Button>
    </form>
  )
};
