import { Schema, model } from "mongoose";
import { User,ClerkEmail } from "../types/user.js";

// Define the nested schema for EmailVerification
const emailVerificationSchema = new Schema({
  expire_at: { type: Number, required: true },
  status: { type: String, required: true },
  strategy: { type: String, required: true },
  verified_at_client: { type: String, required: true },
}, { _id: false });

// Define the nested schema for ClerkEmail
const clerkEmailSchema = new Schema({
  created_at: { type: Number, required: true },
  email_address: { type: String, required: true },
  id: { type: String, required: true },
  updated_at: { type: Number, required: true },
  verification: { type: emailVerificationSchema, required: true },
}, { _id: false });

const userSchema = new Schema<User>({
    id: { type: String, required: true, unique: true, index: true },
    username: { type: String, required: true, unique: true, index: true },
    first_name: { type: String, required: true, index: true },
    last_name: { type: String, required: true, index: true },
    image_url: { type: String, required: true },
    email_addresses: { type: [clerkEmailSchema], required: true, index: true },
    created_at: { type: Date, default: Date.now, index: true },
    is_deleted: { type: Boolean, default: false },
    is_blocked: { type: Boolean, default: false }
}, {
    timestamps: true,
});

const User = model<User>('User', userSchema);

export default User;