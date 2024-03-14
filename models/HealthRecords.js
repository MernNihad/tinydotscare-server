// Import mongoose
import mongoose from 'mongoose';

// Define the schema for health records
const healthRecordSchema = new mongoose.Schema({
    health_record_id: {
        type: Number,
        required: true,
        unique: true // Primary key constraint
    },
    childId: {
        type: String,
        required: true,
        ref: 'Children' // Assuming Children schema for child details
    },
    date: {
        type: Date,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    temperature: {
        type: Number,
        required: true
    },
    diagnosis: {
        type: String
    },
    medication: {
        type: String
    }
});

// Define a model using the schema
export const HealthRecord = mongoose.model('HealthRecord', healthRecordSchema);
