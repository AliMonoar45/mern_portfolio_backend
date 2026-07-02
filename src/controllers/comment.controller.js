import Comment from "../models/comment.model.js";

// creating comment
const createComment = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};

// get all comment
const allComment = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};
// get single comment
const singleComment = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};
// update single comment
const updateComment = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};
// delete single comment
const deleteComment = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
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
