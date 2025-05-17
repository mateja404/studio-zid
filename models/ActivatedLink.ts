import mongoose from "mongoose";
const { Schema } = mongoose;

interface IActivatedLink extends Document {
    reviewId: string;
    isActivated: boolean;
}

const activatedLinkSchema = new Schema<IActivatedLink>(
    {
        reviewId: {
            type: String,
            required: true
        },
        isActivated: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    { timestamps: true }
);

export default mongoose.models.ActivatedLink || mongoose.model("ActivatedLink", activatedLinkSchema);