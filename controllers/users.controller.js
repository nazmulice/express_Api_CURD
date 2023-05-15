const express = require("express");
const app = express();
const User = require("../models/users.model");
app.use(express.urlencoded({ extended: false }));

const { v4: uuidv4 } = require("uuid");

//get All users
const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getOneUser = async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params.id });
    console.log(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//create user
const createUser = async (req, res) => {
  try {
    const newUser = new User({
      id: uuidv4(),
      name: req.body.name,
      age: Number(req.body.age),
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};


//update User
const updateUser = async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params.id });
    user.name = req.body.name;
    user.age = Number(req.body.age);
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//delete user
const deleteUser =async (req, res) => {
  try {
    await User.deleteOne({ id: req.params.id });
    res.status(200).json({message:"User is deleted"});
  } catch (error) {
    res.status(500).send(error.message);
  }
};


 // (module.exports = { getAllUser, createUser, updateUser,deleteUser });
  module.exports = {
    getAllUser,
    createUser,
    getOneUser,
    updateUser,
    deleteUser,
  };
