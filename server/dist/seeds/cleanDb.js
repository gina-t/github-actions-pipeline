// dynamic model handling approach
import mongoose from 'mongoose';
import connectDB from '../config/connection.js';
import models from '../models/index.js';
const cleanDB = async (modelName, collectionName) => {
    try {
        await connectDB(); // Ensure the database is connected
        const model = models[modelName];
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
    }
    catch (err) {
        console.error('Error cleaning collections:', err);
        throw err;
    }
};
export default cleanDB;
// import models from '../models/index.js';
// import connectDB from '../config/connection.js';
// import mongoose from 'mongoose';
// type Model = mongoose.Model<any>;
// export default async function cleanDb(modelName: "Question", collectionName: string): Promise<void> {
//   try {
//     await connectDB(); // Ensure the database is connected
//     const model: Model | undefined = models[modelName];
//     if (!model) {
//       throw new Error(`Model ${modelName} not found`);
//     }
//     const db = mongoose.connection.db;
//     if (!db) {
//       throw new Error('Database connection not established');
//     }
//     const collections = await db.listCollections({ name: collectionName }).toArray();
//     if (collections.length) {
//       await db.dropCollection(collectionName);
//       console.log(`${collectionName} collection dropped.`);
//     }
//   } catch (err) {
//     console.error('Error cleaning collections:', err);
//     throw err;
//   }
// }
