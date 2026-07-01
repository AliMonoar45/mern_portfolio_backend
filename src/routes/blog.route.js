import express from "express";

import blogControllers from "../controllers/blog.controller.js";
import upload from "../configs/multer.config.js";

const router = express.Router();

router.post("/create-blog", upload.single("img"), blogControllers.createBlog);
router.get("/all-blogs", blogControllers.allBlog);
router.get("/:id", blogControllers.singleBlog);
router.put("/:id", blogControllers.updateBlog);
router.delete("/:id", blogControllers.deleteBlog);

export default router;
