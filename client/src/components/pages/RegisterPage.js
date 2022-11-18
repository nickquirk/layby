import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

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
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/register')
      // add navigate function
      navigate('/login')
    } catch (err) {
      console.log(err)
    }
    console.log('form submitted')
  }

  const handleChange = (e) => {
    const input = e.target.value
  }

  return (
    <div className='hero-page text-center form-main'>
      <h1>Register Page</h1>
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <input required 
            className='form-control' 
            type="text" 
            name="username" 
            onChange={handleChange} 
            placeholder="Username"
          />
          <input 
            required
            className='form-control' 
            type="email" 
            name="email" 
            onChange={handleChange} 
            placeholder="Email"
          />
          <input 
            required
            className='form-control' 
            type="password" 
            name="password" 
            onChange={handleChange} 
            placeholder="Password"
          />
          <input 
            required
            className='form-control' 
            type="password" 
            name="passwordConfirmation" 
            onChange={handleChange} 
            placeholder="Confirm password"
          />
          <button className='btn btn-main'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage