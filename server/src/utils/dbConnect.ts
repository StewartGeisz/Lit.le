
// src/utils/dbConnect.ts
import mongoose from 'mongoose';

const dbConnect = async (uri: string) => {
    try {
        await mongoose.connect(uri);
        console.log('Database connected successfully');
    } catch (err) {
        console.error('Database connection error', err);
        process.exit(1);
    }
};

export default dbConnect;
