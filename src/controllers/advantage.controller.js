import { Advantage } from "../models/advantage.model.js";

// creating advantage
const createAdvantage = async (req, res) => {
    try {
        // get all data from req 
        const { title, category, percent, time } = req.body;
         // create single advantage
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


// get all advantages

const allAdvantage = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};
// get single advantage
const singleAdvantage = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};
// single advantage update

const updateAdvantage = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};

// delete single advantage
const deleteAdvantage = async (req, res) => {
  try {
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
    deleteAdvantage
}
export default advantageControllers;