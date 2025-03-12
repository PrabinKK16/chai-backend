import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({ path: "./.env" });

const port = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log(
        "Error caught, the app failed to communicate with the database: ",
        error
      );
      process.exit(1);
    });
    app.listen(port, () => {
      console.log(`The app is listening at port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error: ", error);
    process.exit(1);
  });

// import express from "express";

// const app = express();
// const port =
//   process.env.PORT ||
//   8000(async () => {
//     try {
//       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//       app.on("error", (error) => {
//         console.log("The app failed to talk with the database: ", error);
//         process.exit(1);
//       });
//       app.listen(port, () => {
//         console.log(`App is listening on the port ${port}`);
//       });
//     } catch (error) {
//       console.error("Error caught: ", error);
//       process.exit(1);
//     }
//   })();

// while connecting database always use try catch block.
// try block will try to connect to the database and if it fails then catch block will catch the error and print it.
// always use await keyword before mongoose.connect() because it is an async function.
// await keyword will wait for the connection to be established and then it will move to the next line.
