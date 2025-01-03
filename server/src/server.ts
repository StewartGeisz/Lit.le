import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import leaderboardRoutes from './routes/leaderboard';

const app = express();

// Load environment variables from .env
dotenv.config();

// Log Mongo URI for debugging
console.log('Mongo URI:', process.env.MONGO_URI);

// Get the MongoDB URI from environment variables
const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
  throw new Error('MONGO_URI is not defined in the environment variables');
}

// Connect to MongoDB (without useNewUrlParser and useUnifiedTopology options)
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Middleware setup
app.use(express.json());  // Middleware to parse JSON bodies

// Define routes
app.use('/api/leaderboard', leaderboardRoutes);

// Set the port for the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});