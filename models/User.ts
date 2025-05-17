import mongoose from "mongoose";
const { Schema } = mongoose;

interface IUser extends Document {
    email: string;
    provider: string;
    name?: string;
    avatar?: string;
}

const userSchema = new Schema<IUser>(
    {
        email: {
            type: String,
            unique: true,
            required: function() {
                return this.provider === "credentials"; // Only require email if the provider is "credentials"
            }
        },
        name: {
            type: String,
            required: false
        },
        provider: {
            type: String,
            required: false
        },
    },
    { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);