import { Router } from "express";
import { ProductsController } from "../controllers";

export class ProductsRouter {
    public router = Router();
    
    constructor(private productsController: ProductsController) {
        this.SetRoutes();
    }
    
    private SetRoutes() {
        this.router.route("/").get(this.productsController.GetAllProducts);
        this.router.route("/categories").get(this.productsController.GetAllCategories);
        this.router.route("/category/:category").get(this.productsController.GetAllProductsForCategory);
    }
}