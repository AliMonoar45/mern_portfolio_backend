import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();
// token encode
const encodeToken = (email, id) => {
  const payload = {
    email,
    id,
  };
  const key = process.env.JWT_KEY;
  const expire = process.env.JWT_EXPIRES_IN;
  return jwt.sign(payload, key, { expireIn: expire });
};
// decode token
const decodeToken = () => {};

const authConfig = { encodeToken, decodeToken };

export default authConfig;
