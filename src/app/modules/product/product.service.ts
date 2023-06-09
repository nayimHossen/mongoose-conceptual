import { IProduct } from "./product.interface";
import { Product } from "./product.model";

export const getAllProductsFromDB = async (): Promise<IProduct[]> => {
  return Product.find();
};
