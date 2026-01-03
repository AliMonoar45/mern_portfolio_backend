import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDB from "./configs/db.config.js";

dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})