// src/models/User.ts
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    scores: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Score' }],
});

export default mongoose.model('User', userSchema);