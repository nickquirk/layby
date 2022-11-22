import { NotFound } from '../config/errors.js'
import User from '../models/user.js'

export const getUser = async (req, res) => {
  try {
    const loggedInUser = await User.findById(req.currentUser._id)
    if (!loggedInUser) throw new NotFound('User not found')
    return res.json(loggedInUser)
  } catch (err) {
    console.log(err)
  }
}

export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find()
    return res.json(allUsers)
  } catch (err) {
    console.log(err)
  }
}

export const setProfilePic = async (req, res) => {
  try {
    const loggedInUser = await User.findById(req.currentUser._id)
    if (!loggedInUser) throw new NotFound('User not found')
    Object.assign(loggedInUser, req.body)
    await loggedInUser.save()
    return res.json(loggedInUser)
  } catch (err) {
    console.log(err)
  }
}