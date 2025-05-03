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

    createUser = (req:Request,res:Response) => {
        try {
            console.log("req.body", req.body);
            const user = this.userService.createUser(JSON.parse(req.body));
            res.status(201).json({ message: user });
        } catch (error) {
            warn("Error in controller createUser: ", error);
            throw error;
        }
    }
}