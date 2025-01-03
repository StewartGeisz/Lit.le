// src/routes/leaderboard.ts
import express from 'express';
import Score from '../models/Score';

const router = express.Router();

// Get top scores
router.get('/', async (req, res) => {
    try {
        const scores = await Score.find().sort({ score: -1 }).limit(10);
        res.json(scores);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

// Add a new score
router.post('/', async (req, res) => {
    try {
        const { username, score } = req.body;
        const newScore = new Score({ username, score });
        await newScore.save();
        res.status(201).json(newScore);
    } catch (err) {
        res.status(400).send('Error saving score');
    }
});

export default router;
