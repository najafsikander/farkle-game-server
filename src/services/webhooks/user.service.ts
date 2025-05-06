import { info } from "../../lib/logger.js";

export class UserService {
    updateUser = (data:any) => {
        info("Updating user.", JSON.stringify(data));
        return {'Name':'Najaf Sikander'};
    }
}