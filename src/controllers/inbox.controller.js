import Inbox from "../models/inbox.model.js";

// Create inbox
const createInbox = async (req, res) => {
  try {
    const { name, email, website, message } = req.body;

    let data = await Inbox.create({
      name,
      email,
      website,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Inbox created successfully",
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

// Get all inbox entries
const allInbox = async (req, res) => {
  try {
    let data = await Inbox.find();
    res.status(200).json({
      success: true,
      message: "Inbox fetched successfully",
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

// Get single inbox entry
const singleInbox = async (req, res) => {
  try {
    const { id } = req.params;
    let data = await Inbox.findById(id);

    res.status(200).json({
      success: true,
      message: "Inbox fetched successfully",
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

// Update single inbox entry
const updateInbox = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, website, message } = req.body;

    let data = await Inbox.findByIdAndUpdate(
      id,
      { name, email, website, message },
      { new: true },
    );

    res.status(200).json({
      success: true,
      message: "Inbox updated successfully",
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

// Delete single inbox entry
const deleteInbox = async (req, res) => {
  try {
    const { id } = req.params;
    let data = await Inbox.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Inbox deleted successfully",
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

const inboxControllers = {
  createInbox,
  allInbox,
  singleInbox,
  updateInbox,
  deleteInbox,
};

export default inboxControllers;
