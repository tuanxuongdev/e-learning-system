import { Document, Schema, model, models } from "mongoose";
export interface ILecture extends Document {
  _id: string;
  title: string;
  course: Schema.Types.ObjectId;
  order: number;
  lessons: Schema.Types.ObjectId[];
  created_at: Date;
  _destroy: boolean;
}

const lectureSchema = new Schema<ILecture>({
  title: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  _destroy: {
    type: Boolean,
    default: false,
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: "course",
  },
  lessons: [
    {
      type: Schema.Types.ObjectId,
      ref: "lesson",
    },
  ],
  order: {
    type: Number,
    default: 0,
  },
});

const Lecture = models.Lecture || model<ILecture>("Lecture", lectureSchema);
export default Lecture;
