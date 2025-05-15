import { IncomingHttpHeaders } from "http";
import { info,error } from "../../lib/logger.js";
import { Webhook } from "svix";
import User from "../../models/user.model.js";
import { verifyClerkSignature } from "../../utils/clerkWHVerifier.js";

export class UserService {

    updateUser = async (body: any, headers: any) => {
        try {
            info("Updating user body.", JSON.stringify(body));
            info("Headers: ", JSON.stringify(headers));
            const eventType = verifyClerkSignature(body,headers);
            info("Event Type: ", eventType);
            const { id, ...attributes } = body.data;
            if(eventType === "user.updated" || eventType === "user.created") {
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
    
    deleteUser = async (body: any, headers: any) => {
        try {
            info("Updating user body.", JSON.stringify(body));
            info("Headers: ", JSON.stringify(headers));
            const eventType = verifyClerkSignature(body,headers);
            info("Event Type: ", eventType);
            const {id} = body.data;
            if(eventType === 'user.deleted') {
                const user = await User.findOne({id});
                if(!user) throw new Error('User doenst exist');
                await User.findByIdAndDelete(user._id);
                return 'User is deleted';
            }
        } catch (err) {
            error('Error caught in user services: ',err);
            throw err;
        }
    }



}