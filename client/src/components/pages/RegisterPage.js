import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

//TODO
// Error handling
// Display errors

const RegisterPage = () => {

  // ! Location Variables
  const navigate = useNavigate()

  // ! State 
  // Track state of following variables
  const [ formFields, setFormFields ] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  // ! Executions 
  // 
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // send off form data to our API
      await axios.post('/api/register', formFields)
      // navigate to login page after request has completed
      navigate('/login')
    } catch (err) {
      console.log(err)
    }
    console.log('form submitted')
  }

  const handleChange = (e) => {
    // This happens on any change to the form
    // create shallow copy of form fields by spreading in to a new object
    const updatedFormFields = { ...formFields }
    // set key name to value entered into form field
    updatedFormFields[e.target.name] = e.target.value
    // set formFields = updatedFormFields
    setFormFields(updatedFormFields)
    // ! if there's an error, set to an empty string
  }

  return (
    <div className='hero-page text-center form-main'>
      <h1>Register Page</h1>
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <input 
            required 
            className='form-control' 
            type="text" 
            name="username" 
            onChange={handleChange} 
            placeholder="Username"
            value={formFields.username} 
          />
          <input 
            required
            className='form-control' 
            type="email" 
            name="email" 
            onChange={handleChange} 
            placeholder="Email"
            value={formFields.email} 
          />
          <input 
            required
            className='form-control' 
            type="password" 
            name="password" 
            onChange={handleChange} 
            placeholder="Password"
            value={formFields.password} 
          />
          <input 
            required
            className='form-control' 
            type="password" 
            name="passwordConfirmation" 
            onChange={handleChange} 
            placeholder="Confirm password"
            value={formFields.passwordConfirmation} 
          />
          <button className='btn btn-main'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage