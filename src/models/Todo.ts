import mongoose, { Document, Schema, Types } from 'mongoose';

export interface ITodo extends Document {
  _id: Types.ObjectId;
  text: string;
  completed: boolean;
}

const todoSchema = new Schema<ITodo>({
  text: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

export default mongoose.model<ITodo>('Todo', todoSchema);
