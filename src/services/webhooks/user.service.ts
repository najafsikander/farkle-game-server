import { info } from "../../lib/logger";

export class UserService {
    updateUser = (data:any) => {
        info("Updating user.", JSON.stringify(data));
        return {'Name':'Najaf Sikander'};
    }
}