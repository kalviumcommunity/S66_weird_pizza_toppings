const User = require("../model/userModel");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  try {
    const { username, email, password, favoriteToppings, title } = req.body;

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
      favoriteToppings: favoriteToppings || [],
      title: title || 'Pizza Lover',
      recipesCount: 0,
      likesReceived: 0,
      rating: 0
    });

    await newUser.save();
    return res.status(201).json({
      message: "User created successfully",
      user: {
        ...newUser._doc,
        password: undefined // Remove password from response
      }
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

const getAllUser = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 }); // Exclude password field
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error: error.message });
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

const deleteUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);
    
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "User deleted successfully",
      user: {
        ...deletedUser._doc,
        password: undefined
      }
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

const updateUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const {
      username,
      email,
      favoriteToppings,
      title,
      recipesCount,
      likesReceived,
      rating
    } = req.body;

    // Don't allow password update through this route
    const updateData = {
      username,
      email,
      favoriteToppings,
      title,
      recipesCount,
      likesReceived,
      rating
    };

    // Remove undefined fields
    Object.keys(updateData).forEach(key => 
      updateData[key] === undefined && delete updateData[key]
    );

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: updateData },
      { new: true, select: '-password' }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "User updated successfully",
      user: updatedUser
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

const updateUserStats = async (req, res) => {
  try {
    const userId = req.params.id;
    const { recipesCount, likesReceived, rating } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          recipesCount: recipesCount || 0,
          likesReceived: likesReceived || 0,
          rating: rating || 0
        }
      },
      { new: true, select: '-password' }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "User stats updated successfully",
      user: updatedUser
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

const updateFavoriteToppings = async (req, res) => {
  try {
    const userId = req.params.id;
    const { toppings } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: { favoriteToppings: toppings } },
      { new: true, select: '-password' }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "Favorite toppings updated successfully",
      user: updatedUser
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

module.exports = {
  createUser,
  getAllUser,
  updateUserById,
  deleteUserById,
  updateUserStats,
  updateFavoriteToppings,
  deleteAll
};
