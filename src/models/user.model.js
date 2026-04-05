import bcrypt from "bcrypt";
import { model, Schema } from "mongoose";
// general basic user schema
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },
  password: {
    type: String,
    required: true,
  },
});
// hashing password before saving
userSchema.pre("save", async function () {
  try {
    if (!this.isModified("password")) return ;
    const hash = await bcrypt.hash(this.password, SALT_ROUNDS);
    this.password = hash;
    return;
  } catch (err) {
    return err;
  }
});


const User = model("User", userSchema);

export default User;
