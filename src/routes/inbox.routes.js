import express from "express";

import inboxControllers from "../controllers/inbox.controller.js";
// Importing all inbox controller functions (create, read, update, delete)

import { validateUser } from "../middleware/validation.middleware.js";
// Middleware to ensure only authenticated/validated users can access routes

const router = express.Router();
// Create a new Express router instance

// Create a new inbox entry
router.post("/create-inbox", validateUser, inboxControllers.createInbox);

// Get all inbox entries
router.get("/all-inbox", validateUser, inboxControllers.allInbox);

// Get a single inbox entry by ID
router.get("/single-inbox/:id", validateUser, inboxControllers.singleInbox);

// Update a single inbox entry by ID
router.put("/update-inbox/:id", validateUser, inboxControllers.updateInbox);

// Delete a single inbox entry by ID
router.delete("/delete-inbox/:id", validateUser, inboxControllers.deleteInbox);

export default router;
// Export router to be used in server.js or app.js
