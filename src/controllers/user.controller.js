import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import authConfig from "../configs/auth.config.js";
// registration part
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

//  Login Function Workflow

const login = async (req, res) => {
  try {
    // TODO: Extract email and password from req.body

    const { email, password } = req.body;

    // TODO: Find user in database by email

    const user = await User.findOne({ email });

    //   - If user does not exist -> throw error

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User Not Found" });
    }

    // If user exists -> compare password

    const isMatched = await bcrypt.compare(password, user?.password);

    //   - If password does not match -> throw error
    if (!isMatched) {
      return res
        .status(404)
        .json({ success: false, message: "Password not matched" });
    } else {
      //    If password matches -> continue

      //  Generate JWT token for user
      const token = authConfig.encodeToken(user?.email, user?._id.toString());

      //  Store token in cookies
      res.cookie("user-token", token);
      //  Send success response with token
      // TODO: Return res to frontend
      res.status(200).json({
        success: true,
        message: "Successfully Logged In",
        user: {
          id: user?._id,
          email: user?.email,
        },
        token: token,
      });
    }

    
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Something went wrong : ${error}`,
    });
  }
};

// export log reg
const userController = {
  register,
  login,
};

export default userController;
