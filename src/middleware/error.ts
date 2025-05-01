import { Request,Response,NextFunction } from "express";
import { error } from "../lib/logger.js";

const errorHandler = (err:Error, _req:Request, res:Response, next:NextFunction) => {
    error('Error caught in global middleware: ',err.message);
    res.status(500).json({
        message: "Internal Server Error",
        error: err.message,
    });
}

export default errorHandler;

