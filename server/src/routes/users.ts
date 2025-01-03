
// src/routes/users.ts
import express from 'express';
import User from '../models/User';

const router = express.Router();

// Get user by username
router.get('/:username', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username }).populate('scores');
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.json(user);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

// Add a new user
router.post('/', async (req, res) => {
    try {
        const { username, password } = req.body;
        const newUser = new User({ username, password });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).send('Error saving user');
    }
});

export default router;
