import bodyParser from "body-parser";
import express, { Application } from "express";
import cors from "cors";
import { ProductsController } from "./controllers";
import { ProductsRouter } from "./routes";
import { ProductsService } from "./services";
import { ProductsWorker } from "./workers";
import globalErrorHandler from "./middlewares/globalErrorHandler"

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.setConfig();
        this.setRoutes();
        this.app.use('*', globalErrorHandler);
    }

    private setConfig() {
        this.app.use(bodyParser.json());
        this.app.use(cors());
    }

    private setRoutes() {
        const productsRouter = new ProductsRouter(new ProductsController(new ProductsService(new ProductsWorker())));
        this.app.use("/api/v1/products", productsRouter.router);
    }
}

export default new App().app;