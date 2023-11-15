import mongoose, { Schema } from "mongoose";

const entrySchema = new Schema({
    description: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: {
            values: ['pending', 'in-progress', 'finished'],
            message: '{VALUE} no es un estado permitido'
        }
    }
})

const EntryModel = mongoose.models.Entry || mongoose.model('Entry', entrySchema);

export default EntryModel;