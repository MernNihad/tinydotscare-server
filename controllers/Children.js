// Import the Children model
import Children from '../models/Children.js';

// Controller function to create a new child
export const createChild = async (req, res) => {
    try {
        const { name, age, email, phone, gender, photo, houseName, place, city, state, loginId, standard, payment, parentId } = req.body;
        const child = new Children({ name, age, email, phone, gender, photo, houseName, place, city, state, loginId, standard, payment, parentId });
        const savedChild = await child.save();
        res.status(201).json(savedChild);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller function to get all children
export const getAllChildren = async (req, res) => {
    try {
        const children = await Children.find();
        res.json(children);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to get a child by ID
export const getChildById = async (req, res) => {
    try {
        const child = await Children.findById(req.params.id);
        if (!child) {
            return res.status(404).json({ message: 'Child not found' });
        }
        res.json(child);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to update a child by ID
export const updateChild = async (req, res) => {
    try {
        const { name, age, email, phone, gender, photo, houseName, place, city, state, loginId, standard, payment, parentId } = req.body;
        const updatedChild = await Children.findByIdAndUpdate(
            req.params.id,
            { name, age, email, phone, gender, photo, houseName, place, city, state, loginId, standard, payment, parentId },
            { new: true }
        );
        if (!updatedChild) {
            return res.status(404).json({ message: 'Child not found' });
        }
        res.json(updatedChild);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller function to delete a child by ID
export const deleteChild = async (req, res) => {
    try {
        const deletedChild = await Children.findByIdAndDelete(req.params.id);
        if (!deletedChild) {
            return res.status(404).json({ message: 'Child not found' });
        }
        res.json({ message: 'Child deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
