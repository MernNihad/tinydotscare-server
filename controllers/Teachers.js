// Import the Teacher model
import Teacher from '../models/Teacher.js';

// Controller function to create a new teacher
export const createTeacher = async (req, res) => {
    try {
        const { name, email } = req.body;
        const teacher = new Teacher({ name, email });
        const savedTeacher = await teacher.save();
        res.status(201).json(savedTeacher);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller function to get all teachers
export const getAllTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find();
        res.json(teachers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to get a teacher by ID
export const getTeacherById = async (req, res) => {
    try {
        const teacher = await Teacher.findById(req.params.id);
        if (!teacher) {
            return res.status(404).json({ message: 'Teacher not found' });
        }
        res.json(teacher);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to update a teacher by ID
export const updateTeacher = async (req, res) => {
    try {
        const { name, email } = req.body;
        const updatedTeacher = await Teacher.findByIdAndUpdate(
            req.params.id,
            { name, email },
            { new: true }
        );
        if (!updatedTeacher) {
            return res.status(404).json({ message: 'Teacher not found' });
        }
        res.json(updatedTeacher);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller function to delete a teacher by ID
export const deleteTeacher = async (req, res) => {
    try {
        const deletedTeacher = await Teacher.findByIdAndDelete(req.params.id);
        if (!deletedTeacher) {
            return res.status(404).json({ message: 'Teacher not found' });
        }
        res.json({ message: 'Teacher deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
