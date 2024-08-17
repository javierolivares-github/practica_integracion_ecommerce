import { Router } from "express";
import productsControllers from "../controllers/products.controllers.js";
import sessionControllers from "../controllers/session.controllers.js";

const router = Router();

router.get("/mockingproducts", productsControllers.createProductsMocks);

router.get("/mockingusers", sessionControllers.createUsersMocks);

export default router;