import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./db/index.js";


dotenv.config({
    path: './env'
})


connectDB();





/*

import express from 'express'

const app = express();

;(async () => {
    try {
       const connection =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error",() => {
        console.log(`Error : Application unable to talk to database ${error}`)
        throw(error)
       })
       app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`)

       })
    } catch (error) {
        console.error(`Error DB Connection : ${error}`)
    }
})()


*/