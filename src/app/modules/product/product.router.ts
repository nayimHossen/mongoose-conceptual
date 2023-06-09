import { Router } from "express";
import { getAllProducts, getProduct } from "./product.controller";

const router: Router = Router();

router.get("/allProducts", getAllProducts);
router.get("/details/:id", getProduct);

export default router;
