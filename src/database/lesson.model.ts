import { ELessonType } from "@/types/enums";
import { Document, Schema, model, models } from "mongoose";
export interface ILesson extends Document {
  _id: string;
  title: string;
  slug: string;
  lecture: Schema.Types.ObjectId;
  course: Schema.Types.ObjectId;
  order: Number;
  duration: number;
  video_url: string;
  content: string;
  type: ELessonType;
  created_at: Date;
  _destroy: boolean;
}

const lessonSchema = new Schema<ILesson>({
  title: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  slug: {
    type: String,
    required: true,
  },
  _destroy: {
    type: Boolean,
    default: false,
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: "course",
  },
  order: {
    type: Number,
    default: 0,
  },
  video_url: {
    type: String,
  },
  content: {
    type: String,
  },
  duration: {
    type: Number,
    default: 0,
  },
  lecture: {
    type: Schema.Types.ObjectId,
    ref: "Lecture",
  },
  type: {
    type: String,
    enum: Object.values(ELessonType),
    default: ELessonType.VIDEO,
  },
});

const Lesson = models.Lesson || model<ILesson>("Lesson", lessonSchema);
export default Lesson;
