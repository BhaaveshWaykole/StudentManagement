import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config()

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("Connected to db")
})

app.use(express.json())
// app.use(helmet())
// app.use(morgan("common"))

app.listen(8000, () => {
    console.log('Student ZIA 8000 :)');
  });