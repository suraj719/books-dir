const User = require("../models/Usermodal");

const jwt = require("jsonwebtoken");
const createUser = async (req, res) => {
  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) return res.status(400).send("Email already exists");
  //create new user
  const hasheduser = new User({
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const saveduser = await User.create(hasheduser);
    res.status(201).json(saveduser);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const loginUser = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("invalid email");
  if (req.body.password!=user.password) return res.status(400).send("invalid password");
  const token = jwt.sign({ email: user.email }, process.env.SECRET_KEY);
  try {
    res.send({ token: token });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  createUser,
  loginUser,
};
