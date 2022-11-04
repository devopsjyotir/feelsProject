const User = require("../models/users");
const Places = require("../models/Places");

// FInding a city y id
const getPlaces = async (req, res) => {
  try {
    const { id } = req.params;
    const places = await Places.findById(id);
    if (places) {
      return res.status(200).json({ places });
    }
    return res
      .status(404)
      .send("Place with the specified attribute does not exist");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// find attributes that match interests
const getAllPlaces = async (req, res) => {
  try {
    const { interests } = req.params;
    console.log("interests ===", interests);
    const places = await Places.find({
      attributes: {
        $in: [interests],
      },
    });
    return res.status(200).json({ places });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const getAllUsers = async (req, res) => {
  try {
    const { name } = req.params;
    // console.log("interests ===", interests);
    const users = await User.find({
      name,
    });
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// call to Create a new user
const createUser = async (req, res) => {
  try {
    const user = await new User(req.body);
    await user.save();
    return res.status(201).json({
      user,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};




const deletePlace = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Places.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Deleted')
    }
    throw new Error('Not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}


module.exports = {
  createUser,
  getPlaces,
  getAllPlaces,
  getAllUsers,
  deletePlace 
 
};
