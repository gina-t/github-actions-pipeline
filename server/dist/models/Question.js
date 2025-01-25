import { Schema, model } from 'mongoose';
// const AnswerSchema = new Schema<IAnswer>({
//   _id: { type: Schema.Types.ObjectId, auto: true },
//   text: { type: String, required: true },
//   isCorrect: { type: Boolean, required: true }
// });
const QuestionSchema = new Schema({
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
const Question = model('Question', QuestionSchema);
export { QuestionSchema };
export default Question;
