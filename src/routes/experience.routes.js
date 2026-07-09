import express from "express";
import experienceControllers from "../controllers/experience.controller.js";
import { validateUser } from "../middleware/validation.middleware.js";

const router = express.Router();
// create exp
router.post(
  "/create-experience",
  validateUser,
  experienceControllers.createExperience,
);
// all exp
router.get(
  "/all-experience",
  validateUser,
  experienceControllers.allExperience,
);
// single exp
router.get(
  "/single-experience/:id",
  validateUser,
  experienceControllers.singleExperience,
);
// update exp
router.put(
  "/update-experience/:id",
  validateUser,
  experienceControllers.updateExperience,
);
// delete exp
router.delete(
  "/delete-experience/:id",
  validateUser,
  experienceControllers.deleteExperience,
);
export default router;
