import connectDB from "../config/connection.js";
import Question from "../models/Question.js";
import cleanDB from "./cleanDb.js";
import techquizQuestions from './techquizQustions.json' assert { type: "json" };
const seedDatabase = async () => {
    try {
        console.log('Connecting to the database...');
        await connectDB();
        console.log('Database connected.');
        console.log('Cleaning the database...');
        await cleanDB('Question', 'questions');
        console.log('Database cleaned.');
        console.log('Inserting questions...');
        await Question.insertMany(techquizQuestions);
        console.log('Questions inserted.');
        console.log('Seeding completed successfully!');
        process.exit(0);
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};
// Call the seedDatabase function to start the seeding process
seedDatabase();
