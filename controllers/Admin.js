// Import the Admin model
import Admin from '../models/Admin.js';

// Controller function to create a new admin
export const createAdmin = async (req, res) => {
    try {
        const { name, email } = req.body;
        const admin = new Admin({ name, email });
        const savedAdmin = await admin.save();
        res.status(201).json(savedAdmin);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller function to get all admins
export const getAllAdmins = async (req, res) => {
    try {
        const admins = await Admin.find();
        res.json(admins);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to get an admin by ID
export const getAdminById = async (req, res) => {
    try {
        const admin = await Admin.findById(req.params.id);
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }
        res.json(admin);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to update an admin by ID
export const updateAdmin = async (req, res) => {
    try {
        const { name, email } = req.body;
        const updatedAdmin = await Admin.findByIdAndUpdate(
            req.params.id,
            { name, email },
            { new: true }
        );
        if (!updatedAdmin) {
            return res.status(404).json({ message: 'Admin not found' });
        }
        res.json(updatedAdmin);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller function to delete an admin by ID
export const deleteAdmin = async (req, res) => {
    try {
        const deletedAdmin = await Admin.findByIdAndDelete(req.params.id);
        if (!deletedAdmin) {
            return res.status(404).json({ message: 'Admin not found' });
        }
        res.json({ message: 'Admin deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
