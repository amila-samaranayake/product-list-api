import { DUMMYURL } from "../constants/api.constants";
import { IProduct } from "../models";

export class ProductsWorker {
    
    public GetAllProducts(query: any): Promise<IProduct[]> {
        const url = Object.keys(query).length > 0 ? `${DUMMYURL}products?limit=10&skip=${query.skip}` : `${DUMMYURL}products`;
        return fetch(url).then(res => res.json().then(res => res.products));
    }

    public GetAllCategories(): Promise<string[]> {
        return fetch(`${DUMMYURL}products/categories`).then(res => res.json());
    }

    public GetAllProductsForCategory(category:string): Promise<IProduct[]> {
        return fetch(`${DUMMYURL}products/category/${category}`).then(res => res.json());
    }
}