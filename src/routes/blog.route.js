import express from "express";

import blogControllers from "../controllers/blog.controller.js";

const router = express.Router();

router.post("/create-blog", blogControllers.createBlog);

export default router;
