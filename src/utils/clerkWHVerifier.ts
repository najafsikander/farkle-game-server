import { Webhook } from "svix";
import { error } from "../lib/logger.js";

export const verifyClerkSignature = (body: any, headers: any): string => {
    try {
        const clerkWHSecret = process.env.CLERK_WEBHOOK_SECRET;
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