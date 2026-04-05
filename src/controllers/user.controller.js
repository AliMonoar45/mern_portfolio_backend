import User from "../models/user.model.js";

const register = async (req, res) => {
  try {
    // get user email and pass form req
    const { email, password } = req.body;
    // create user
    const user = await User.create({ email, password });

    //res
    res.status(201).json({
      success: true,
      message: "User created Successfully..",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Something went wrong : ${error}`,
      
    });
  }
};
const login = async (req, res) => {};

const userController = {
  register,
  login,
};

export default userController;
