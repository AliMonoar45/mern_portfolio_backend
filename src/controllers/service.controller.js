import Service from "../models/service.model.js";

// create service
const createService = async (req, res) => {
  try {
    // TODO: dummy img link modify letter for actual file upload
    const { title, img, description } = req.body;

    let data = await Service.create({
      title,
      img,
      description,
    });
    res.status(200).json({
      success: true,
      message: "Service created successfully",
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

// get all service
const allService = async (req, res) => {
  try {
    let data = await Service.find();
    res.status(200).json({
      success: true,
      message: "Service fetched successfully",
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
// get single service
const singleService = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await Service.findById(id);
    res.status(200).json({
      success: true,
      message: "Service fetched successfully",
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

// update single service
const updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, img, description } = req.body;

    let data = await Service.findByIdAndUpdate(
      id,
      { title, img, description },
      { new: true },
    );
    res.status(200).json({
      success: true,
      message: "Service updated successfully",
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
// delete single service
const deleteService = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await Service.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Service deleted successfully",
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

const serviceControllers = {
  createService,
  allService,
  singleService,
  updateService,
  deleteService,
};
export default serviceControllers;
