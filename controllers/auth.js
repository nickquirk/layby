import User from '../models/user.js'
import jwt from 'jsonwebtoken'
import {} from 'dotenv/config'

//TODO 
// Custom Errors

// * Register controller 
// Method: POST
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

// * Login Controller 
// Method: POST
// Endpoint: /login
export const loginUser = async (req, res) => {
  try {
    // destructure email and password keys from req.body
    const { email, password } = req.body
    // check email on the req.body against the collection to see if there's a matching document
    const userToLogin = await User.findOne({ email: email })
    //Check to see if user has been found & password match
    //Passing password entered to the custom function we created in user schema
    if (!userToLogin || !userToLogin.validatePassword(password)){
      throw new Error('Unauthorised')
    }
    // if they match, create an object with user id and the username and send token back to user
    const payload = {
      sub: userToLogin._id,
      username: userToLogin.username,
    }
    // set secret = to secret in .env file
    const secret = process.env.SECRET
    // create token from payload and the secret
    const token = jwt.sign(payload, secret, { expiresIn: '7 days' })
    // return welcome message and token to user
    return res.json({ message: `Welcome back ${userToLogin.username}`, token: token })

    
  } catch (err) {
    console.log(err)
  }
}
