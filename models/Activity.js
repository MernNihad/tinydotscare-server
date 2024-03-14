// Import mongoose
import mongoose from 'mongoose';

// Define the schema for activities
const activitySchema = new mongoose.Schema({
    activity_id: {
        type: Number,
        required: true,
        unique: true // Primary key constraint
    },
    date: {
        type: Date,
        required: true
    },
    childId: {
        type: String,
        required: true
    },
    assignedBy: {
        type: String,
        required: true
    },
    activityDetails: {
        type: String,
        required: true
    }
});

// Define a model using the schema
const Activity = mongoose.model('Activity', activitySchema);

// Export the model
export default Activity;
