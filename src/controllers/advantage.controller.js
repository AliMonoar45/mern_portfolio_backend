import  Advantage  from "../models/Advantage.model.js";

// creating Advantage
const createAdvantage = async (req, res) => {
  try {
    // get all data from req
    const { title, category, percent, time } = req.body;
    // create single Advantage
    let data = await Advantage.create({
      title,
      category,
      percent,
      time,
    });
    // send response
    res.status(201).json({
      success: true,
      message: "Advantage created successfully",
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

// get all Advantages

const allAdvantage = async (req, res) => {
  try {
      let data = await Advantage.find();
    //   console.log("i am here")
    res.status(200).json({
      success: true,
      message: "Advantage fetched successfully",
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
// get single Advantage
const singleAdvantage = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await Advantage.findById(id);
    res.status(200).json({
      success: true,
      message: "Advantage fetched successfully",
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
// single Advantage update

const updateAdvantage = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, category, percent, time } = req.body;

    let data = await Advantage.findByIdAndUpdate(
      id,
      { title, category, percent, time },
      { new: true },
    );
    res.status(200).json({
      success: true,
      message: "Advantage updated successfully",
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

// delete single Advantage
const deleteAdvantage = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await Advantage.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Advantage deleted successfully",
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

const advantageControllers = {
  createAdvantage,
  allAdvantage,
  singleAdvantage,
  updateAdvantage,
  deleteAdvantage,
};
export default advantageControllers;
