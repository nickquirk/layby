import { NotFound } from '../config/errors.js'
import User from '../models/user.js'

export const getUser = async (req, res) => {
  try {
    const loggedInUser = await User.findById(req.currentUser._id).populate('reviews')
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
    else if (req.body.profileImage === loggedInUser.profileImage) throw new Error('Image is the same as current image')
    else if (!req.body.profileImage) throw new Error('Please select an image to upload')
    Object.assign(loggedInUser, req.body)
    await loggedInUser.save()
    return res.json(loggedInUser)
  } catch (err) {
    console.log(err.message)
    return res.status(304).json({ message: err.message })
  }
}

export const getUserReviews = async (req, res) => {
  try {
    const loggedInUser = await User.findById(req.currentUser._id)
    if (!loggedInUser) throw new NotFound('User not found')
  } catch (err) {
    console.log(err.message)
  }
}