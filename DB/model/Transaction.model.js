import { Schema, model, Types } from "mongoose";
const transactionSchema = new Schema({
    amount: {
        type: Number,
        required: true
    },
    customerId: {
        type: Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
})
const transactionModel =  model("Transaction"   , transactionSchema)
export  default transactionModel