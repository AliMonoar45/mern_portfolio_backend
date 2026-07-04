import express from "express";
import educationController from "../controllers/education.controller.js";
import { validateUser } from "../middleware/validation.middleware.js";

const router = express.Router();
// create education route
router.post(
  "/create-education",
  validateUser,
  educationController.createEducation,
);
// get all education
router.get("/all-education", validateUser, educationController.allEducation);
router.get("/single-education/:id", validateUser, educationController.singleEducation);

export default router;
