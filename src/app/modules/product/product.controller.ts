import { NextFunction, Request, Response } from "express";
import { getAllProductsFromDB } from "./product.service";

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const products = await getAllProductsFromDB();
  res.send(products);
};
