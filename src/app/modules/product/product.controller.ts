import { NextFunction, Request, Response } from "express";
import { getAllProductsFromDB, getProductByIdFromDB } from "./product.service";

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const products = await getAllProductsFromDB();
  res.send(products);
};

export const getProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const product = await getProductByIdFromDB(id);
  res.send(product);
};
