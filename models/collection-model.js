import mongoose from 'mongoose';
import { ObjectId } from 'mongodb';

const itemSchema = new mongoose.Schema({
    owned: {
        type: Boolean,
        required: true,
    },
    createdAt: {
        // type: Date,
        type: String,
        required: true,
        // default: Date.now
    },
    dateAdded: {
        // type: Date,
        type: String,
        required: true,
    },
    cost: {
        type: Number,
        required: true,
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