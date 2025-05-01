import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 3000;
export const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://najafsikander23:Najaf5886983@farkle.kkxxxqz.mongodb.net/?retryWrites=true&w=majority&appName=farkle";