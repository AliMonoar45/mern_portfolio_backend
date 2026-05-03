import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./configs/db.config.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  } catch (error) {
      console.error("Failed to connect to connect");
      process.exit(1);
  }
};
startServer();
app.use("/api/v1", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
