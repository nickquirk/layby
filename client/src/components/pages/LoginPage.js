import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

//TODO
// Error handling
// Display errors

const LoginPage = () => {

  // ! Location Variables
  const navigate = useNavigate()

  // ! State 
  // Track state of following variables
  const [ formFields, setFormFields ] = useState({
    email: '',
    password: '',
  })

  // ! Executions 
  // send off form data to our API
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/api/login', formFields)
      // navigate to home after successful login
      navigate('/')
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
      <h1>Login</h1>
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <input 
            required 
            className='form-control' 
            type="email" name="email" 
            onChange={handleChange} 
            placeholder="Email"
            value={formFields.username} 
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
          <button to={'/'} className='btn btn-main'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage