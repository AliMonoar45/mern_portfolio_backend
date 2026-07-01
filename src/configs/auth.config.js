import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();
// token encode
const encodeToken = (email, id) => {
  const payload = { email, id };
  const key = process.env.JWT_KEY;
  const expire = process.env.JWT_EXPIRES_IN; 
  return jwt.sign(payload, key, { expiresIn: expire });
};
// decode token
const decodeToken = (token) => {
  try {
    const key = process.env.JWT_KEY;
    const decoded = jwt.verify(token, key);
    return decoded;
  } catch (error) {
    return null;
  }
};

const authConfig = { encodeToken, decodeToken };

export default authConfig;
