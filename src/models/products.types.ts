import { ValueOf } from "../utils/types";

export const productsCategoryEntity = {
  LAPTOP: 'laptop',
  SMARTPHONE: 'smartphone',
  TABLET: 'tablet',
} as const;

export type ProductCategory = ValueOf<typeof productsCategoryEntity>;

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  count: number;
  category?: ProductCategory
  productionDate: string
  createdAt: string
  updatedAt: string
};

export type ProductFormBody = Omit<Product, 'id' | 'createdAt' | 'updatedAt'>;
