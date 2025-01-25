import mongoose from 'mongoose';
declare const connectDB: () => Promise<typeof mongoose.connection>;
export default connectDB;
