import User from '../models/user.js'

// * Register controller 
// Method: GET
// Endpoint: /register
// Attempt to create new user returning back new user if created
// Throw an error if not
export const registerUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body)
    console.log(req.body)
    return res.status(202).json({ message: `Welcome ${newUser.username}` })
  } catch (err) {
    return res.status(422).json({ message: err.message })
  }
}

