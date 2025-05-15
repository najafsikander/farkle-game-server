import { Webhook } from "svix";
import { error } from "../lib/logger.js";

export const verifyClerkSignature = (body: any, headers: any): string => {
    try {
        const clerkWHSecret = getClerkSecret(body.type);
        if (!clerkWHSecret) throw new Error("Webhook secret not found");
        const wh = new Webhook(clerkWHSecret)
        const eventWh: any = wh.verify(JSON.stringify(body), headers);
        if (!eventWh) throw new Error("Invalid webhook");
        const eventType = eventWh?.type;

        return eventType;
    } catch (err) {
        error('Error caught in helper function: ', err);
        throw err;
    }
}

const getClerkSecret = (type:string):string => {
    let secret = '';
    
    switch(type) {
        case 'user.created':
            secret = process.env.CLERK_WH_CREATE_UPDATE_SECRET!;
            break;
        case 'user.updated':
            secret = process.env.CLERK_WH_CREATE_UPDATE_SECRET!;
            break;
        case 'user.deleted':
            secret = process.env.CLERK_WH_DELETE_SECRET!;
            break;
        default:
            secret = process.env.CLERK_WH_CREATE_UPDATE_SECRET!;
            break;
    }
    return secret;
}