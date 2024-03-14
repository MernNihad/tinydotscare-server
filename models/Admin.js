import mongoose from 'mongoose';

// Define the schema for a blog post
const postSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, {
    timestamps: true // Add createdAt and updatedAt fields
});

// Define a model using the schema
export const Post = mongoose.model('Post', postSchema);
