// Import the Parent model
import Parent from '../models/Parent.js';

// Controller function to create a new parent
export const createParent = async (req, res) => {
    try {
        const { name, age, email, phone, gender, photo, houseName, place, city, state, loginId, qualification, type, childId } = req.body;
        const parent = new Parent({ name, age, email, phone, gender, photo, houseName, place, city, state, loginId, qualification, type, childId });
        const savedParent = await parent.save();
        res.status(201).json(savedParent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller function to get all parents
export const getAllParents = async (req, res) => {
    try {
        const parents = await Parent.find();
        res.json(parents);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to get a parent by ID
export const getParentById = async (req, res) => {
    try {
        const parent = await Parent.findById(req.params.id);
        if (!parent) {
            return res.status(404).json({ message: 'Parent not found' });
        }
        res.json(parent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to update a parent by ID
export const updateParent = async (req, res) => {
    try {
        const { name, age, email, phone, gender, photo, houseName, place, city, state, loginId, qualification, type, childId } = req.body;
        const updatedParent = await Parent.findByIdAndUpdate(
            req.params.id,
            { name, age, email, phone, gender, photo, houseName, place, city, state, loginId, qualification, type, childId },
            { new: true }
        );
        if (!updatedParent) {
            return res.status(404).json({ message: 'Parent not found' });
        }
        res.json(updatedParent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller function to delete a parent by ID
export const deleteParent = async (req, res) => {
    try {
        const deletedParent = await Parent.findByIdAndDelete(req.params.id);
        if (!deletedParent) {
            return res.status(404).json({ message: 'Parent not found' });
        }
        res.json({ message: 'Parent deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
