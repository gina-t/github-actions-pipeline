// import { fileURLToPath } from 'url';
// import path from 'path';
// import dotenv from 'dotenv';
import mongoose from 'mongoose';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const envFile = process.env.NODE_ENV === 'production' ? '../.env.production' : '../.env.development';
// dotenv.config({ path: path.resolve(__dirname, envFile) });
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/techquiz';
const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Database connected.');
        return mongoose.connection;
    }
    catch (error) {
        console.error('Database connection error:', error);
        throw new Error('Database connection failed.');
    }
};
export default connectDB;
