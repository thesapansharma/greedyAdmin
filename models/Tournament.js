import mongoose, { Schema } from 'mongoose';
const tournamentSchema = new Schema({
    title: { type: String, required: true },
    game_id: { type: Schema.Types.ObjectId, ref: 'Game', required: true },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
    max_players: { type: Number, required: true },
    prize_pool: { type: Number, default: 0 },
    status: {
        type: String,
        enum: ['upcoming', 'ongoing', 'completed'],
        default: 'upcoming',
    },
}, { timestamps: true });
const Tournament = mongoose.model('Tournament', tournamentSchema);
export default Tournament;
