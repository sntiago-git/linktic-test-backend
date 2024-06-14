import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const { NODE_APP_HOST, NODE_APP_DB, MONGO_URI } = process.env;
let mongoURI: string = ""

if (!NODE_APP_HOST || !NODE_APP_DB) {
    throw new Error('Database conexion error, some variables are missing');
}

if (MONGO_URI) {
    mongoURI = MONGO_URI
} else {
    mongoURI = `mongodb://${NODE_APP_HOST}/${NODE_APP_DB}`; //Url de db local
}

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {});
        console.log("MongoDB connected");
    } catch (err) {
        console.error((err as Error).message);
        process.exit(1);
    }
};

export default connectDB;
