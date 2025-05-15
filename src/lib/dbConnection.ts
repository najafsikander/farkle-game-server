import {connect} from 'mongoose';
import { info, warn } from './logger.js';
export const connectToDatabase = async () => {
    try {
        const url = process.env.DB_URI;
        if(url) {
            const connection = await connect(url);
            if(!connection) throw  new Error('Something went wrong');
            info("Connected to the database");
        }
    } catch (error) {
        warn("Error connecting to the database", error);
        throw error;
    }
}