import Education from "../models/education.model.js";

// create education
const createEducation = async (req, res) => {
  try {
    // get from req body
    const { title, institute, description, time } = req.body;
    // store data
    let data = await Education.create({
      title,
      institute,
      description,
      time,
    });
    // send response
    res.status(201).json({
      success: true,
      message: "Education created successfully",
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
// get all education
const allEducation = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};
// get single education
const singleEducation = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};
// update single education
const updateEducation = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};
// delete single education
const deleteEducation = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};

const educationController = {
  createEducation,
  allEducation,
  singleEducation,
  updateEducation,
  deleteEducation,
};
export default educationController;
