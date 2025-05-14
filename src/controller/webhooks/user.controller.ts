import { NextFunction,Request,Response } from "express";
import { UserService } from "../../services/webhooks/user.service.js";
import { log } from "../../lib/logger.js";

export class UserController {
    constructor(private userService = new UserService()) {}

    updateUser = (req: Request, res: Response, next:NextFunction) => {
        try {
            const data = req.body || (req as any).rawBody;
            const svixHeaders = req.headers;
            log("req.body", data);
            const user = this.userService.updateUser(data,svixHeaders);
            res.status(200).json({ user });
        } catch (error) {
            console.error("Error in controller updateUser: ", error);
            next(error);
        }
    }
    
}