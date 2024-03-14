// Import mongoose
import mongoose from 'mongoose';

// Define the schema for salary
const salarySchema = new mongoose.Schema({
    salary_id: {
        type: Number,
        required: true,
        unique: true // Primary key constraint
    },
    date: {
        type: Date,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    receiverId: {
        type: String,
        required: true
    }
});

// Define a model using the schema
const Salary = mongoose.model('Salary', salarySchema);

// Export the model
export default Salary;
