import mongoose from 'mongoose';
import { SingleMessage } from '../models/SingleMessage.js';

export const sentMessage = async (req, res) => {
    try {
        if(!req.params.id) return res.status(400).json({message:"Id not provided"})
        const newMessage = new SingleMessage({...req.body,receiver:req.params.id,sender:req.user._id});
        const savedMessage = await newMessage.save();
        res.status(201).json({result:savedMessage,message:'Successfully created'});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getMessages = async (req, res) => {
    try {
      
        if(!req.params.id) return res.status(400).json({message:"Id not provided"})
        const getMessages = await SingleMessage.find({sender:new mongoose.Types.ObjectId(req.user.id),receiver:new mongoose.Types.ObjectId(req.params.id)});
        res.status(201).json({result:getMessages});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

