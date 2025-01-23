import mongoose from 'mongoose';
import connectDB from '../config/connection.js';
import models from '../models/index.js';

interface Models {
  [key: string]: mongoose.Model<any>;
}

const cleanDB = async (modelName: "Question", collectionName: string): Promise<void> => {
  try {
    await connectDB(); // Ensure the database is connected

    const model = (models as Models)[modelName];
    if (!model) {
      throw new Error(`Model ${modelName} not found`);
    }

    const db = mongoose.connection.db;
    if (!db) {
      throw new Error('Database connection not established');
    }

    const collections = await db.listCollections({ name: collectionName }).toArray();

    if (collections.length) {
      await model.collection.drop();
      console.log(`${collectionName} collection dropped.`);
    }
  } catch (err) {
    console.error('Error cleaning collections:', err);
    throw err;
  }
};

export default cleanDB;

// import { Question } from '../models/index.js';

// const cleanDB = async (): Promise<void> => {
//   try {
//     await Question.deleteMany({});
//     console.log('Question collection cleaned.');

//   } catch (err) {
//     console.error('Error cleaning collections:', err);
//     process.exit(1);
//   }
// };

// export default cleanDB;
