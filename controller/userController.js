const User = require("../model/userModel");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existedUser = await User.findOne({ email });

    if (existedUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

const deleteAll = async(req,res)=>{
    try{
        await User.deleteMany({});
        return res.status(200).json({ message: "All users deleted successfully" });
    }catch(error){
        console.error(error.message)
    }
}

const delteUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await User.findByIdAndDelete(userId);
    return res.status(200).json({ message: "User deleted" });
  } catch (error) {
    console.error(error.message);
  }
};

const updateUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const updateData = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: updateData },
      { new: true } 
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ 
      message: "User info updated successfully", 
      user: updatedUser 
    });
  } catch (error) {
    return res.status(500).json({ 
      message: "Internal Server Error", 
      error: error.message 
    });
  }
};

module.exports = { createUser, getAllUser,delteUserById,updateUserById,deleteAll };
