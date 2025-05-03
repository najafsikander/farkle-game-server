import { Schema, model } from "mongoose";
import { User } from "../types/user.js";

const userSchema = new Schema<User>({
    id: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    image_url: { type: String, required: true },
    primary_email_id: { type: String, required: true },
    primary_phone_number_id: { type: String, default: null },
    created_at: { type: Date, default: Date.now }
}, {
    timestamps: false,
});

const User = model<User>('User', userSchema);

export default User;