
// src/controllers/ScoreController.ts
import { Request, Response } from 'express';
import Score from '../models/Score';

const ScoreController = {
    getTopScores: async (req: Request, res: Response) => {
        try {
            const scores = await Score.find().sort({ score: -1 }).limit(10);
            res.json(scores);
        } catch (err) {
            res.status(500).send('Server error');
        }
    },
    addScore: async (req: Request, res: Response) => {
        try {
            const { username, score } = req.body;
            const newScore = new Score({ username, score });
            await newScore.save();
            res.status(201).json(newScore);
        } catch (err) {
            res.status(400).send('Error saving score');
        }
    }
};

export default ScoreController;