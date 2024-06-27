import mongoose from 'mongoose';
import { ObjectId } from 'mongodb';

const itemSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },
    dateAdded: {
        type: Date,
        required: true,
    },
    notes: {
        type: String,
    },


})

const collectionSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    userId: {
        required: true,
        type: String
        // type: ObjectId
    },
    createdAt: {
        required: true,
        // type: Date,
        type: String,
        // default: Date.now
    },
    items: [itemSchema],
    isPublic: {
        required: true,
        type: Boolean
    }


});

// Check if the model exists before defining it
const Collection = mongoose.models.Collection || mongoose.model('Collection', collectionSchema);

export default Collection;