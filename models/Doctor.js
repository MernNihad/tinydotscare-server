// Import mongoose
import mongoose from 'mongoose';

// Define the schema for doctor details
const doctorSchema = new mongoose.Schema({
    doctor_id: {
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
    qualification: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
}, {
    timestamps: true // Add createdAt and updatedAt fields
});

// Define a model using the schema
export const Doctor = mongoose.model('Doctor', doctorSchema);
