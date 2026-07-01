import authConfig from "../configs/auth.config.js";

export const validateUser = (req, res, next) => {
  try {
    // Access cookies correctly
    const token = req.cookies["user-token"];

    if (!token) {
      return res.status(401).json({
        message: "No token provided",
      });
    }

    // Decode token
    const decodedToken = authConfig.decodeToken(token);

    if (decodedToken === null) {
      return res.status(401).json({
        message: "Invalid token",
      });
    }

    // Attach decoded values to request headers
    req.headers.email = decodedToken.email;
    req.headers._id = decodedToken.id;

    next();
  } catch (error) {
    res.status(500).json({
      message: `Something went wrong: ${error.message}`,
    });
  }
};
