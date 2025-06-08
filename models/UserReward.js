import mongoose, { Schema } from 'mongoose';
const userRewardSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    reward_type: {
        type: String,
        enum: ['cash', 'item', 'bonus'],
        required: true,
    },
    reward_amount: { type: Number },
    reward_item_id: { type: Schema.Types.ObjectId, ref: 'Item' },
}, { timestamps: true });
const UserReward = mongoose.model('UserReward', userRewardSchema);
export default UserReward;
