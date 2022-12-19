import { Router } from "express";
import { SystemController } from "../controllers";

export class SystemRoutes {
    public router = Router();

    constructor(private systemController:SystemController) {
        this.setRoutes();
    }

    public setRoutes() {
        this.router.route("/").get(this.systemController.sendApiDocument);
    }
}