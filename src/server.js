import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./configs/db.config.js";
import userRoutes from "./routes/user.routes.js";
import blogRoutes from "./routes/blog.route.js";

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
// user route
// user related
app.use("/api/v1/auth", userRoutes);

// blog related
app.use("/api/v1/blogs", blogRoutes);
// advantage route
app.use("/api/v1/advantages", advantageRoutes);

// check server is running
app.get("/", (req, res) => {
  res.send("Portfolio Backend Server is Running...");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
