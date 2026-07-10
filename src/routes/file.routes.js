import express from "express";
import upload from "../configs/multer.config.js";
import fileControllers from "../controllers/file.controller.js";
import { validateUser } from "../middleware/validation.middleware.js";

const router = express.Router();
router.post(
  "/uploads",
  validateUser,
  upload.single("filename"),
  fileControllers.fileUpload,
);
export default router;
