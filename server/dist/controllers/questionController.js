import Question from '../models/Question.js';
export const getRandomQuestions = async (_req, res) => {
    try {
        console.log('Starting getRandomQuestions function');
        const questions = await Question.aggregate([
            { $sample: { size: 10 } },
            { $project: { __v: 0 } },
        ]);
        res.status(200).json(questions);
    }
    catch (err) {
        console.error('Error occurred:', err);
        res.status(500).json({ error: err.message });
    }
};
