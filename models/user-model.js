import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
        unique: true,
    },
    displayName: {
        type: String
    },
    createdAt: {
        type: Date,
        required: true
    },
    collections: {
        type: Array,
    },
    friendRequestsSent: {
        type: Array
    },
    friendRequestsReceived: {
        type: Array
    },
    friends: {
        type: Array,
    }
});

// Check if the model exists before defining it
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;