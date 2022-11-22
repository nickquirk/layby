/* eslint-disable comma-dangle */
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

// * User schema
//  This will define the fields a user will have to complete on registration
// Username - add to databse
// Email - add to database
// Password - add to databse
// PasswordConfirmation - dont add to database

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, maxlength: 30 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profileImage: { type: String }
})

// ? Removing password field from lookup of the users collection
userSchema.set('toJSON', {
  transform(_doc, json) {
    delete json.password
    return json
  },
  virtuals: true
})

// Using virtual keyword to define a virtual field for passwordConfirmation
// This means that the form data can be used for validation but won't get saved to the database
userSchema.virtual('passwordConfirmation').set(function (fieldValue) {
  this._passwordConfirmation = fieldValue
})

// There are two types of requests that are likely with this schema
// - When a user is created
// - When a user is being updated

// ? Custom pre-validation
// - Check that user is actually attemptng to create/modify a password
// - 1st when user is created. Will need all 4 fields: isModified will return true
// - 2nd when user is updated. Password may not be updated: isModified will return false

userSchema.pre('validate', function (next) {
  if (
    this.isModified('password') &&
    this._passwordConfirmation !== this.password
  ) {
    // If the password is being modified/created but doesn't match, throw a validation error
    this.invalidate('passwordConfirmation', 'Passwords do not match')
  }
  next() // If the above state doesn't execute, move on to next step
})

// ? Pre-save
// Use bcrypt to create a hashed version of the plaintext password and save it to the field
userSchema.pre('save', function (next) {
  // check if password is being modified or created
  if (this.isModified('password')) {
    // set password equal to bcrypt hashed password using 12 salt rounds
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(12))
  }
  next() // No errors? Move on
})

// ? Check Password against hashed password
// This is a custom method to take a password entered by a user and check it against a saved, hashed password
// We are adding the method as a key in the methods object which contains kvp of all methods on that object
// It will take one arg, the password entered by the user
// Using 'function' so we can use 'this' keyword
userSchema.methods.validatePassword = function (plainTextPassword) {
  return bcrypt.compareSync(plainTextPassword, this.password)
}

export default mongoose.model('User', userSchema)
