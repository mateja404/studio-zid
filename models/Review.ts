import mongoose from "mongoose";
const { Schema } = mongoose;

interface IReview extends Document {
    username: string;
    userAvatar: string;
    rating: number;
    description: string;
    role: string;
}

const reviewSchema = new Schema<IReview>(
    {
        username: {
            type: String,
            required: false
        },
        userAvatar: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        role: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

export default mongoose.models.Review || mongoose.model("Review", reviewSchema);