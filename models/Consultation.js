// Import mongoose
import mongoose from 'mongoose';

// Define the schema for consultation details
const consultationSchema = new mongoose.Schema({
    consultation_id: {
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
    }
});

// Define a model using the schema
const Consultation = mongoose.model('Consultation', consultationSchema);

// Export the model
export default Consultation;
