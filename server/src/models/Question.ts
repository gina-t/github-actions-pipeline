import { Schema, model, Document } from 'mongoose';

interface IAnswer extends Document {
  // _id: Types.ObjectId;
  text: string;
  isCorrect: boolean;
}

interface IQuestion extends Document {
  // _id: Types.ObjectId;
  question: string;
  answers: IAnswer[];
}

// const AnswerSchema = new Schema<IAnswer>({
//   _id: { type: Schema.Types.ObjectId, auto: true },
//   text: { type: String, required: true },
//   isCorrect: { type: Boolean, required: true }
// });

const QuestionSchema = new Schema<IQuestion>({
  // _id: { type: Schema.Types.ObjectId, auto: true },
  // question: { type: String, required: true },
  // answers: [AnswerSchema]
  question: { type: String, required: true },
  answers: [
    {
      text: { type: String, required: true },
      isCorrect: { type: Boolean, required: true }
    }
  ]
});

const Question = model<IQuestion>('Question', QuestionSchema);
export { IQuestion, QuestionSchema };
export default Question;
