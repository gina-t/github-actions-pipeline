import Question from "../models/Question.js";
import cleanDB from "./cleanDb.js";
import pythonQuestions from "./pythonQuestions.json" assert { type: "json" };

const seedDatabase = async () => {
  try {
    console.log('Cleaning the database...');
    await cleanDB('questions');
    console.log('Database cleaned.');

    console.log('Inserting questions...');
    await Question.insertMany(pythonQuestions);
    console.log('Questions inserted.');

    console.log('Seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
