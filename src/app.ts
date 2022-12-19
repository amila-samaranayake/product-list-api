import bodyParser from "body-parser";
import express, { Application } from "express";
import cors from "cors";
import { ProductsController, SystemController } from "./controllers";
import { ProductsRouter, SystemRoutes } from "./routes";
import { ProductsService } from "./services";
import { ProductsWorker } from "./workers";
import globalErrorHandler from "./middlewares/globalErrorHandler"

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.setConfig();
        this.setRoutes();
        this.setStaticFiles();
        this.app.use('*', globalErrorHandler);
    }

    private setConfig() {
        this.app.use(bodyParser.json());
        this.app.use(cors());
    }

    private setStaticFiles() {
        this.app.use("/docs", express.static('./docs'));
    }

    private setRoutes() {
        const productsRouter = new ProductsRouter(new ProductsController(new ProductsService(new ProductsWorker())));
        this.app.use("/api/v1/products", productsRouter.router);

        const systemRouts = new SystemRoutes(new SystemController());
        this.app.use("/api", systemRouts.router);
    }
}

export default new App().app;