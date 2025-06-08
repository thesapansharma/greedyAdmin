import { Schema, model } from 'mongoose';
const CurrencyTransactionSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    transaction_type: {
        type: String,
        enum: ['earn', 'spend', 'deposit', 'withdraw'],
        required: true,
    },
    amount: { type: Number, required: true },
    transaction_date: { type: Date, default: Date.now },
}, { timestamps: true });
export const CurrencyTransaction = model('CurrencyTransaction', CurrencyTransactionSchema);
