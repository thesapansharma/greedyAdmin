import mongoose, { Schema } from 'mongoose';
const tournamentParticipantSchema = new Schema({
    tournament_id: { type: Schema.Types.ObjectId, ref: 'Tournament', required: true },
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    status: {
        type: String,
        enum: ['joined', 'completed', 'disqualified'],
        default: 'joined',
    },
    points: { type: Number, default: 0 },
    ranking: { type: Number },
}, { timestamps: true });
const TournamentParticipant = mongoose.model('TournamentParticipant', tournamentParticipantSchema);
export default TournamentParticipant;
