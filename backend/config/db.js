import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoURI = process.env.MONGO_URI;
console.log(mongoURI);

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongoURI);
    console.log("mongodb connected succesfully");
  } catch (e) {
    console.log(`Error:${e.message}`);
    process.exit(1);
  }
};
