import { Schema } from 'mongoose';
interface IAnswer extends Document {
    text: string;
    isCorrect: boolean;
}
interface IQuestion extends Document {
    question: string;
    answers: IAnswer[];
}
declare const QuestionSchema: Schema<IQuestion, import("mongoose").Model<IQuestion, any, any, any, import("mongoose").Document<unknown, any, IQuestion> & IQuestion & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IQuestion, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IQuestion>> & import("mongoose").FlatRecord<IQuestion> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
declare const Question: import("mongoose").Model<IQuestion, {}, {}, {}, import("mongoose").Document<unknown, {}, IQuestion> & IQuestion & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>;
export { IQuestion, QuestionSchema };
export default Question;
