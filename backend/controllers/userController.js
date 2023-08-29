const User = require('../models/userModel')
const mongoose = require('mongoose')

// get all Users
const getUsers = async (req, res) => {
  const users = await User.find({}).sort({createdAt: -1})

  res.status(200).json(users)
}

// get a single User
const getUser = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such user'})
  }

  const user = await User.findById(id)

  if (!user) {
    return res.status(404).json({error: 'No such user'})
  }

  res.status(200).json(user)
}

// create a new User account and assign a random uid to the account number
const uuid = require('uuid'); // Import the 'uuid' package

const createUser = async (req, res) => {
  const {accountnumber, name, email, balance, UID} = req.body;

  let emptyFields = [];

  if (!accountnumber) {
    emptyFields.push('accountnumber');
  }
  if (!name) {
    emptyFields.push('name');
  }
  if (!email) {
    emptyFields.push('email');
  }
  // Add a field for balance and generating a UID upon creation
  if (!balance) {
    emptyFields.push('balance');
  }

  // Generate a random UID if it is not provided
  const randomUid = UID || uuid.v4();

  if (!randomUid) {
    emptyFields.push('UID');
  }

  if (emptyFields.length > 0) {
    return res.status(400).json({error: 'Please fill in all fields', emptyFields});
  }

  // Add the UUID to the user object before adding to the database
  const userObject = {accountnumber, name, email, balance, UID: randomUid};

  try {
    const user = await User.create(userObject);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};


// delete a User
const deleteUser = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such user'})
  }

  const user = await User.findOneAndDelete({_id: id})

  if(!user) {
    return res.status(400).json({error: 'No such user'})
  }

  res.status(200).json(user)
}

// update a User
const updateUser = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such user'})
  }

  const user = await User.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!user) {
    return res.status(400).json({error: 'No such User'})
  }

  res.status(200).json(user)
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser
}