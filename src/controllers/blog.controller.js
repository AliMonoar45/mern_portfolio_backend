import Blog from "../models/blog.model.js";

//create blog
const createBlog = async (req, res) => {
  try {
    // get blog data from req body
    const blogData = req.body;
    // create a blog
    const result = await Blog.create(blogData);

    // send success response
    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      // give blog data to frontend
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
const allBlog = async (req, res) => {
  try {
    // fetching all blogs using
    const blogs = await Blog.find();
    // console.log(blogs);
    // if blogs is empty
    if (!blogs || blogs.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No blogs found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Blogs fetch successfully",
      data: blogs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: `Something went wrong : ${error}`,
    });
  }
};

// single blog
const singleBlog = async (req, res) => {
  try {
    // fetching single blog
    // getting id from req of params

    const { id } = req.params;

    // validate id format first

    // i use mongoose id
    /* if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid blog ID format",
      });
    } */
    // find single blog
    const blog = await Blog.findById( id );

    // if not found
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    // res to frontend if all go right
    res.status(200).json({
      success: true,
      message: "Blog fetch successfully",
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: `Something went wrong : ${error}`,
    });
  }
};

// update blog
const updateBlog = async (req, res) => {
  try {
    // fetching single blog for update
    // getting id from req of params

    const { id } = req.params;
    // get new information to update
    const { title, img, category, description, short_description } = req.body;
    // validate id format first
    /* if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid blog ID format",
      });
    } */
    // find single blog and update
    const blog = await Blog.findByIdAndUpdate(
      id,
      {
        title,
        img,
        category,
        description,
        short_description,
      },
      {
        new: true,
      },
    );

    // if not found
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    // res to frontend if all go right
    res.status(200).json({
      success: true,
      message: "Blog updated successfully",
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: `Something went wrong : ${error}`,
    });
  }
};

// delete blog
const deleteBlog = async (req, res) => {
  try {
    // get id from request params
    const { id } = req.params;

    // validate id format first
    
    /* if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid blog ID format",
      });
    } */

    // find blog by id and delete
    const deleted_blog = await Blog.findByIdAndDelete(id);

    // if not found
    if (!deleted_blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    // success response
    res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
      data: deleted_blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: `Something went wrong : ${error}`,
    });
  }
};

// for export
const blogControllers = {
  createBlog,
  allBlog,
  singleBlog,
  updateBlog,
  deleteBlog,
};

export default blogControllers;
