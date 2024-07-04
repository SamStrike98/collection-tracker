import mongoose from 'mongoose';
import { ObjectId } from 'mongodb';

const itemSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    // dateAdded: {
    //     type: Date,
    //     required: true,
    // },
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
        type: Date,
        // default: Date.now
    },
    items: [itemSchema],
    itemsNeed: [itemSchema],
    isPublic: {
        required: true,
        type: Boolean
    },
    views: {
        type: Number,
        required: true,
        default: 0
    },
    iconColour: {
        type: String,
        required: true,
        default: 'green'
    },
    icon: {
        type: String,
        required: true,
        default: 'rocket'
    },
    likes: {
        type: Array,
        default: []
    }


});

// Check if the model exists before defining it
const Collection = mongoose.models.Collection || mongoose.model('Collection', collectionSchema);

export default Collection;