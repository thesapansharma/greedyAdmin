import mongoose, { Schema } from 'mongoose';
const gamesPlayedHistorySchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    game_id: { type: Schema.Types.ObjectId, ref: 'Game', required: true },
    total_played: { type: Number, default: 0 },
    total_won: { type: Number, default: 0 },
    total_lost: { type: Number, default: 0 },
    total_drawn: { type: Number, default: 0 },
}, { timestamps: true });
const GamesPlayedHistory = mongoose.model('GamesPlayedHistory', gamesPlayedHistorySchema);
export default GamesPlayedHistory;
