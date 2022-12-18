import { NextFunction, Request, Response } from "express";
import { ProductsService } from "../services";
export class ProductsController {

    constructor(private productsService: ProductsService) {

    }

    public GetAllProducts = async (req: Request, res: Response, next: NextFunction) => {
        const { query } = req;
        try {
            const rst = await this.productsService.GetAllProducts(query);
            res.send(rst);
        } catch (err) {
            next(err);
        }
    };

    public GetAllCategories = async (_: Request, res: Response, next: NextFunction) => {
        try {
            const rst = await this.productsService.GetAllCategories();
            res.send(rst);
        } catch (err) {
            next(err);
        }
    };

    public GetAllProductsForCategory = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const rst = await this.productsService.GetAllProductsForCategory(req.params.category);
            res.send(rst);
        } catch (err) {
            next(err);
        }
    };
}

