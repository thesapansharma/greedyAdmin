import mongoose, { Schema } from 'mongoose';
const gameSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    game_type: {
        type: String,
        enum: ['singleplayer', 'multiplayer'],
        required: true,
    },
    category: { type: String },
    min_players: { type: Number, default: 1 },
    max_players: { type: Number, default: 2 },
    entry_fee: { type: Number, default: 0 },
    prize_pool: { type: Number, default: 0 },
}, { timestamps: true });
const Game = mongoose.model('Game', gameSchema);
export default Game;
