import { IProduct } from "./product.interface";
import { Product } from "./product.model";

export const getAllProduct = async (): Promise<IProduct[]> => {
  return Product.find();
};
