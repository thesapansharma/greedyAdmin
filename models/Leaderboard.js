import mongoose, { Schema } from 'mongoose';
const leaderboardSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    game_id: { type: Schema.Types.ObjectId, ref: 'Game', required: true },
    total_score: { type: Number, required: true },
    rank: { type: Number },
}, { timestamps: true });
const Leaderboard = mongoose.model('Leaderboard', leaderboardSchema);
export default Leaderboard;
