import mongoose from 'mongoose';
import { ObjectId } from 'mongodb';

const itemSchema = new mongoose.Schema({
    itemId: {
        type: ObjectId,
        required: true,
    },
    owned: {
        type: Boolean,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
    },
    dateAdded: {
        type: Date,
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
    createdAt: {
        required: true,
        type: Date,
        default: Date.now
    },
    items: [itemSchema],
    public: {
        required: true,
        type: Boolean
    }


});

// Check if the model exists before defining it
const Collection = mongoose.models.Collection || mongoose.model('Collection', collectionSchema);

export default Collection;