import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  const { name, email, password, role } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashed,
    role
  });

  const token = jwt.sign({ id: user._id }, "secret");

  res.json({ token, user });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  const match = await bcrypt.compare(password, user.password);

  if (!match) return res.status(400).json({ msg: "Invalid" });

  const token = jwt.sign({ id: user._id }, "secret");

  res.json({ token, user });
};