// Import mongoose
import mongoose from 'mongoose';

// Define the schema for payments
const paymentSchema = new mongoose.Schema({
    payment_id: {
        type: Number,
        required: true,
        unique: true // Primary key constraint
    },
    date: {
        type: Date,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    child_id: {
        type: String,
        required: true
    }
});

// Define a model using the schema
const Payment = mongoose.model('Payment', paymentSchema);

// Export the model
export default Payment;

