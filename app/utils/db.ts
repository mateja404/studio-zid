import mongoose from "mongoose";

const connect = async () => {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
        throw new Error("MONGO_URI is not defined in the environment variables");
    }

    if (mongoose.connections[0].readyState) return;

    try {
        await mongoose.connect(mongoUri);
        console.log("MongoDB connection successfully established")
    } catch (error) {
        throw new Error("Error with connection");
    }
}

export default connect;