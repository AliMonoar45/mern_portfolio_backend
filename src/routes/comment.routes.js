import express from "express";

import commentControllers from "../controllers/comment.controller.js";
import { validateUser } from "../middleware/validation.middleware.js";
import { app } from "../server.js";

const router = express.Router();

// create comment
router.post("/create-comment", validateUser, commentControllers.createComment);
// get all comment
router.get("/all-comment", validateUser, commentControllers.allComment);
// get single comment
router.get(
  "/single-comment/:id",
  validateUser,
  commentControllers.singleComment,
);
// update comment
router.put(
  "/update-comment/:id",
  validateUser,
  commentControllers.updateComment,
);
// delete comment
router.delete(
  "/delete-comment/:id",
  validateUser,
  commentControllers.deleteComment,
);

export default router; 
