import { NextFunction, Request, Response } from "express";
import {UserService} from "../services/user.service.js";
import { warn } from "../lib/logger.js";

export class UserController {
    constructor(private userService = new UserService()) {}

    getUsers = (req:Request,res:Response) => {
        try {
            const users = this.userService.getUsers();
            res.json({ message:users });
        } catch (error) {
            warn("Error in controller getUsers: ", error);
            throw error;
        }
    }
}