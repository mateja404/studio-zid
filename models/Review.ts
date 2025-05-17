import mongoose from "mongoose";
const { Schema } = mongoose;

interface IReview extends Document {
    reviewId: string;
    username: string;
    userAvatar: string;
    stars: number;
    description: string;
    title: string;
}

const reviewSchema = new Schema<IReview>(
    {
        reviewId: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: false
        },
        userAvatar: {
            type: String,
            required: true
        },
        stars: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

export default mongoose.models.Review || mongoose.model("Rewview", reviewSchema);