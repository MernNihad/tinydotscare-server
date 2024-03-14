// Import mongoose
import mongoose from 'mongoose';

// Define the schema for children details
const childrenSchema = new mongoose.Schema({
    child_Id: {
        type: Number,
        required: true,
        unique: true // Primary key constraint
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    houseName: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    loginId: {
        type: Number,
        required: true,
        ref: 'User' // Assuming User schema for login information
    },
    standard: {
        type: String,
        required: true
    },
    payment: {
        type: Number,
        required: true
    },
    parent_Id: {
        type: String,
        required: true
    }
}, {
    timestamps: true // Add createdAt and updatedAt fields
});

// Define a model using the schema
export const Children = mongoose.model('Children', childrenSchema);
