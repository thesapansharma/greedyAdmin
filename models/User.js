import { Schema, model } from 'mongoose';
const userSchema = new Schema({
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password_hash: { type: String, required: true },
    phone_number: { type: String, unique: true, required: true },
    profile_picture_url: String,
    total_winnings: { type: Number, default: 0 },
}, { timestamps: true });
const User = model('User', userSchema);
export default User;
