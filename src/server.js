import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./configs/db.config.js";
import userRoutes from "./routes/user.routes.js";
import blogRoutes from "./routes/blog.route.js";
import advantageRoutes from "./routes/advantage.routes.js";
import commentRoutes from "./routes/comment.routes.js";
import educationRoutes from "./routes/education.routes.js";
import experienceRoutes from "./routes/experience.routes.js";
import fileRoutes from "./routes/file.routes.js";
import inboxRoutes from "./routes/inbox.routes.js";
import portfolioRoutes from "./routes/portfolio.routes.js";
import serviceRoutes from "./routes/service.routes.js";

dotenv.config();

const port = process.env.PORT;
export const app = express();

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
// comment route
app.use("/api/v1/comments", commentRoutes);
// education routes
app.use("/api/v1/educations", educationRoutes);
// experience route
app.use("/api/v1/experiences", experienceRoutes);
// file route
app.use("/api/v1/files", fileRoutes);
// inbox route
app.use("/api/v1/inboxes", inboxRoutes);
// portfolio route
app.use("/api/v1/portfolios", portfolioRoutes);
// service route
app.use("/api/v1/services", serviceRoutes);

// check server is running
app.get("/", (req, res) => {
  res.send("Portfolio Backend Server is Running...");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
