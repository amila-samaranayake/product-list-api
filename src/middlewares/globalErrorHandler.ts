import { Request, Response, NextFunction} from "express";
import logger from "../logger";

const errorHandler = (
    err: Error, 
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    const error = {
        name: err.name,
        message: err.message,
        stack: err.stack
    }
    logger.error(error);
    res.send(error);
}

export default errorHandler;