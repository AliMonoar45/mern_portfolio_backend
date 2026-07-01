import { Advantage } from "../models/advantage.model.js";

// creating advantage
const createAdvantage = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};
