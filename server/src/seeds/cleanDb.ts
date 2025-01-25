import mongoose from 'mongoose';
import connectDB from '../config/connection.js';
import models from '../models/index.js';

const cleanDB = async (collectionName: string): Promise<void> => {
  try {
    await connectDB(); 

    const db = mongoose.connection.db;
    if (!db) {
      throw new Error('Database connection not established');
    }

    const collections = await db.listCollections({ name: collectionName }).toArray();

    if (collections.length) {
      await models.Question.collection.drop();
      console.log(`${collectionName} collection dropped.`);
    }
  } catch (err) {
    console.error('Error cleaning collections:', err);
    throw err;
  }
};

export default cleanDB;