import { Schema, Document } from 'mongoose';
interface IAnswer extends Document {
    text: string;
    isCorrect: boolean;
}
interface IQuestion extends Document {
    question: string;
    answers: IAnswer[];
}
declare const QuestionSchema: Schema<IQuestion, import("mongoose").Model<IQuestion, any, any, any, Document<unknown, any, IQuestion> & IQuestion & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IQuestion, Document<unknown, {}, import("mongoose").FlatRecord<IQuestion>> & import("mongoose").FlatRecord<IQuestion> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
declare const Question: import("mongoose").Model<IQuestion, {}, {}, {}, Document<unknown, {}, IQuestion> & IQuestion & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export { IQuestion, QuestionSchema };
export default Question;
