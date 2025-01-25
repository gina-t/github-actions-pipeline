import type { Request, Response } from 'express';
import Question from '../models/Question.js';

export const getRandomQuestions = async (_req: Request, res: Response) => {
  try {
    console.log('Starting getRandomQuestions function');
    
    const questions = await Question.aggregate([
      { $sample: { size: 10 } },
      { $project: { __v: 0 } },
    ]);

    console.log('Questions retrieved:', questions);

    res.status(200).json(questions);
  } catch (err: any) {
    console.error('Error occurred:', err);
    res.status(500).json({ error: (err as Error).message });
  }
};