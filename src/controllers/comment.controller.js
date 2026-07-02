import Comment from "../models/comment.model.js";

// creating comment
const createComment = async (req, res) => {
  try {
    // get comment info
    let { name, blogID, email, comment } = req.body;
    // creating blog id
    blogID = new ObjectId(blogID);
    let data = await Comment.create({
      blogID,
      name,
      email,
      comment,
    });
    res.status(201).json({
      success: true,
      message: "Comment created successfully",
      data,
    });
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
    // find all comments
    let data = await Comment.find();
    res.status(200).json({
      success: true,
      message: "All comment fetch successfully",
      data,
    });
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
    // get id from req params
    const { id } = req.params;
    // find single comment by id
    let data = Comment.findById(id);
    res.status(200).json({
      success: true,
      message: "Comment fetched successfully",
      data,
    });
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
    const { id } = req.params;
    // new comment
    const { name, email, comment } = req.body;
    // update comment
    let data = await Comment.findByIdAndUpdate(
      id,
      {
        name,
        email,
        comment,
      },
      { new: true },
    );
    // send response
    res.status(200).json({
      success: true,
      message: "Comment updated successfully",
      data,
    });
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
    const { id } = req.params;
    let data = Comment.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Comment deleted successfully",
      data,
    });
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
