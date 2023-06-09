import { Router } from "express";
import { getAllProducts } from "./product.controller";

const router: Router = Router();

router.get("/products", getAllProducts);

export default router;
