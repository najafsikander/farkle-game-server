import { IncomingHttpHeaders } from "http";
import { info,error } from "../../lib/logger.js";
import { Webhook } from "svix";
import User from "../../models/user.model.js";

export class UserService {
    updateUser = async (body: any, headers: any) => {
        try {
            info("Updating user body.", JSON.stringify(body));
            info("Headers: ", JSON.stringify(headers));
            const clerkWHSecret = process.env.CLERK_WEBHOOK_SECRET;
            if (!clerkWHSecret) throw new Error("Webhook secret not found");
            const wh = new Webhook(clerkWHSecret)
            const eventWh:any = wh.verify(JSON.stringify(body), headers);
            if(!eventWh) throw new Error("Invalid webhook");
            const eventType = eventWh?.type;
            info("Event Type: ", eventType);
            const data = body.data;
            const { id, ...attributes } = data;
            if(eventType === "user.updated") {
                const user = await User.findOne({ id});
                if(!user) {
                    const newUser = new User({ id, ...attributes });
                    await newUser.save();
                    info("User created: ", JSON.stringify(newUser));
                    return newUser;
                }

                user.set(attributes);
                await user.save();
                return user;
            }
        } catch (err) {
            error('Error in webhook user service updateUser: ', err);
            throw error;
        }
    }
}