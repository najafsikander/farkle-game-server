import { info } from "../lib/logger.js";

export class UserService {

    getUsers() {
        info("Fetching users");
        return 'users fetched';
    }
}

