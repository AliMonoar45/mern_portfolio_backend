import Blog from "../models/blog.model.js";

//create blog
const createBlog = async (req, res) => {
  try {
    const blogData = req.body;
    const result = await Blog.create(blogData);

    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: `Something went wrong : ${error}`,
    });
  }
};

// all blogs
const allBlog = async (req, res) => {};

// single blog
const singleBlog = async (req, res) => {};

// update blog
const updateBlog = async (req, res) => {};

// delete blog
const deleteBlog = async (req, res) => {};

// for export
const blogControllers = {
  createBlog,
  allBlog,
  singleBlog,
  updateBlog,
  deleteBlog,
};

export default blogControllers;
