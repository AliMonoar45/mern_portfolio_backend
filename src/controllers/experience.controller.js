import Experience from "../models/experience.model.js";

// create experience

const createExperience = async (req, res) => {
  try {
    const { title, company, description, time } = req.body;

    let data = await Experience.create({
      title,
      company,
      description,
      time,
    });
    res.status(200).json({
      success: true,
      message: "Experience created successfully",
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

// get all experience
const allExperience = async (req, res) => {
  try {
    let data = await Experience.find();
    res.status(200).json({
      success: true,
      message: "Experience created successfully",
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

// get single experience
const singleExperience = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await Experience.findById(id);
    res.status(200).json({
      success: true,
      message: "Experience fetched successfully",
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
// update single experience
const updateExperience = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, company, description, time } = req.body;

    let data = await Experience.findByIdAndUpdate(
      id,
      { title, company, description, time },
      { new: true },
    );
    res.status(200).json({
      success: true,
      message: "Experience updated successfully",
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

// delete single experience
const deleteExperience = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await Experience.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Experience deleted successfully",
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

const experienceControllers = {
  createExperience,
  allExperience,
  singleExperience,
  updateExperience,
  deleteExperience,
};

export default experienceControllers;
