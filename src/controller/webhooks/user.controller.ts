import { NextFunction,Request,Response } from "express";
import { UserService } from "../../services/webhooks/user.service.js";
import { log,error } from "../../lib/logger.js";

export class UserController {
    constructor(private userService = new UserService()) {}

    updateUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = req.body || (req as any).rawBody;
            const svixHeaders = req.headers;
            log("req.body", data);
            const user = await this.userService.updateUser(data,svixHeaders);
            if(user) res.status(200).json({ user });
        } catch (err) {
            error("Error in controller updateUser: ", err);
            next(err);
        }
    }

    deleteUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = req.body || (req as any).rawBody;
            const svixHeaders = req.headers;
            log("req.body", data);
            const result = await this.userService.deleteUser(data, svixHeaders);
            if(result) res.status(200).json({message: result});
        } catch (err) {
            error('Error in controller deleteUser: ', err);
            next(err);
        }
    }
}