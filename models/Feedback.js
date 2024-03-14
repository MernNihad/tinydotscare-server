// Import mongoose
import mongoose from 'mongoose';

// Define the schema for feedback
const feedbackSchema = new mongoose.Schema({
    feedback_id: {
        type: Number,
        required: true,
        unique: true // Primary key constraint
    },
    date: {
        type: Date,
        required: true
    },
    userId: {
        type: Number,
        required: true
    },
    feedback: {
        type: String,
        required: true,
        maxlength: 500 // Constraint for maximum length of feedback
    }
});

// Define a model using the schema
const Feedback = mongoose.model('Feedback', feedbackSchema);

// Export the model
export default Feedback;
