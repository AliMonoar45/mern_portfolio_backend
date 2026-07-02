import mongoose from "mongoose";
import Comment from "../models/comment.model.js";

const { Types } = mongoose;

// create comment
const createComment = async (req, res) => {
  try {
    let { blogID, name, email, comment } = req.body;

    // required fields
    if (!name || !email || !comment) {
      return res.status(400).json({
        success: false,
        message: "name, email and comment are required",
      });
    }

    // validate blogID if provided
    if (blogID) {
      if (!Types.ObjectId.isValid(blogID)) {
        return res.status(400).json({
          success: false,
          message: "Invalid blogID",
        });
      }
      blogID = new Types.ObjectId(blogID);
    }

    const data = await Comment.create({ blogID, name, email, comment });

    return res.status(201).json({
      success: true,
      message: "Comment created successfully",
      data,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong.",
      error: error.message,
    });
  }
};

// get all comment
const allComment = async (req, res) => {
  try {
    const data = await Comment.find();
    return res.status(200).json({
      success: true,
      message: "All comment fetch successfully",
      data,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong.",
      error: error.message,
    });
  }
};

// get single comment
const singleComment = async (req, res) => {
  try {
    const { id } = req.params;

    if (!Types.ObjectId.isValid(id)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid comment id" });
    }

    const data = await Comment.findById(id);

    if (!data) {
      return res
        .status(404)
        .json({ success: false, message: "Comment not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Comment fetched successfully",
      data,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong.",
      error: error.message,
    });
  }
};

// update single comment
const updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, comment } = req.body;

    if (!Types.ObjectId.isValid(id)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid comment id" });
    }

    const updatePayload = { name, email, comment };
    Object.keys(updatePayload).forEach(
      (k) => updatePayload[k] === undefined && delete updatePayload[k],
    );

    const data = await Comment.findByIdAndUpdate(id, updatePayload, {
      new: true,
    });

    if (!data) {
      return res
        .status(404)
        .json({ success: false, message: "Comment not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Comment updated successfully",
      data,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong.",
      error: error.message,
    });
  }
};

// delete single comment
const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;

    if (!Types.ObjectId.isValid(id)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid comment id" });
    }

    const data = await Comment.findByIdAndDelete(id);

    if (!data) {
      return res
        .status(404)
        .json({ success: false, message: "Comment not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Comment deleted successfully",
      data,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong.",
      error: error.message,
    });
  }
};

const commentControllers = {
  createComment,
  allComment,
  singleComment,
  updateComment,
  deleteComment,
};

export default commentControllers;
