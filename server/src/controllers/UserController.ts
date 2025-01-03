
// src/controllers/UserController.ts
import { Request, Response } from 'express';
import User from '../models/User';

const UserController = {
    getUserByUsername: async (req: Request, res: Response) => {
        try {
            const user = await User.findOne({ username: req.params.username }).populate('scores');
            if (!user) {
                return res.status(404).send('User not found');
            }
            res.json(user);
        } catch (err) {
            res.status(500).send('Server error');
        }
    },
    addUser: async (req: Request, res: Response) => {
        try {
            const { username, password } = req.body;
            const newUser = new User({ username, password });
            await newUser.save();
            res.status(201).json(newUser);
        } catch (err) {
            res.status(400).send('Error saving user');
        }
    }
};

export default UserController;
