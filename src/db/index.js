import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST ${connectionInstance.connections.host}`
    );
  } catch (error) {
    console.error("Error: ", error);
    process.exit(1);
  }
};

export default connectDB;

// the exit in node js are of two type 0 and 1. 0 => means success without any kind of error
// 1 => means there is some kind of error.
// process.exit(1) => means there is some kind of error.
