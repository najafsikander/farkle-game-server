import { info } from "../lib/logger.js";

export class UserService {

    getUsers() {
        info("Fetching users.");
        return 'users fetched';
    }

    createUser(data: any) {
        info("Creating user.", JSON.stringify(data));
        return {'Name':'Najaf Sikander'};
    }
}

