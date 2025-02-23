// require('dotenv').config({path: './env'});
import dotenv from "dotenv";

import connectDB from "./db/index.js";

dotenv.config({ path: "./env" });

connectDB();

/*
import express from "express";

const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERRR: ", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
})(); // IIFES
*/

// while connecting database always use try catch block.
// try block will try to connect to the database and if it fails then catch block will catch the error and print it.
// always use await keyword before mongoose.connect() because it is an async function.
// await keyword will wait for the connection to be established and then it will move to the next line.
