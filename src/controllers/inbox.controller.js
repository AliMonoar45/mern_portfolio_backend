import inbox from "../models/inbox.model";

// create inbox
const createInbox = async (req, res) => {
  try {
    const { title, category, percent, time } = req.body;

    let data = await Inbox.create({
      title,
      category,
      percent,
      time,
    });
    res.status(200).json({
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
// get all inbox
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
// get single inbox
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
// update single inbox
const updateInbox = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, category, percent, time } = req.body;

    let data = await Inbox.findByIdAndUpdate(
      id,
      { title, category, percent, time },
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
// delete single inbox
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

const advantageControllers = {
  createInbox,
  allInbox,
  singleInbox,
  updateInbox,
  deleteInbox,
};
export default advantageControllers;
