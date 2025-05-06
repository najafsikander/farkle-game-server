import { NextFunction,Request,Response } from "express";
import { UserService } from "../../services/webhooks/user.service.js";
import { log } from "../../lib/logger";

export class UserController {
    constructor(private userService = new UserService()) {}

    updateUser = (req: Request, res: Response, next:NextFunction) => {
        try {
            const data = req.body;
            log("req.body", data);
            const user = this.userService.updateUser(data);
            res.status(200).json({ message: user });
        } catch (error) {
            console.error("Error in controller updateUser: ", error);
            next(error);
        }
    }
}