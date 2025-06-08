import mongoose, { Schema } from 'mongoose';
const gameSessionSchema = new Schema({
    game_id: { type: Schema.Types.ObjectId, ref: 'Game', required: true },
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    start_time: { type: Date, default: Date.now },
    end_time: { type: Date },
    status: {
        type: String,
        enum: ['active', 'completed', 'abandoned'],
        default: 'active',
    },
    score: { type: Number, default: 0 },
    result: {
        type: String,
        enum: ['win', 'lose', 'draw'],
        default: 'lose',
    },
}, { timestamps: true });
const GameSession = mongoose.model('GameSession', gameSessionSchema);
export default GameSession;
