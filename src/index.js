// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import app from "./app.js";


dotenv.config({
  path: "./.env",
});

/*
import express from 'express'

const app = express()

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on('error', () => {
            console.log('Error', error)
            throw error
        })
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("Error: ", error)
        throw error
    }
})();
*/

const port = process.env.PORT || 8000

connectDB()
.then(() => {
    app.on('error', (error) => {
        console.error("Error", error)
        throw error
    })
    app.listen(port, () => {
        console.log(`App running at port : ${port}`)
    })
})
.catch((error) => {
    console.error('mongoDB connection failed!!!')
})
