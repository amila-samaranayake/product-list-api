import { IProduct } from "../models";
import { ProductsWorker } from "../workers";

export class ProductsService {
    constructor(private productsWorker: ProductsWorker) {

    }

    public async GetAllProducts(query: any): Promise<IProduct[]> {
        return await this.productsWorker.GetAllProducts(query);
    }

    public async GetAllCategories(): Promise<string[]> {
        return await this.productsWorker.GetAllCategories();
    }

    public async GetAllProductsForCategory(category: string): Promise<IProduct[]> {
        return await this.productsWorker.GetAllProductsForCategory(category);
    }
}