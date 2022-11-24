/* eslint-disable comma-dangle */
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// imports
import axios from 'axios'
import { setToken } from '../common/Auth'


const LoginPage = () => {
  // ! Location Variables
  const navigate = useNavigate()

  // ! State
  // Track state of following variables
  const [formFields, setFormFields] = useState({
    email: '',
    password: ''
  })

  const [ error , setError ] = useState('')

  // ! Executions
  // send off form data to our API
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('/api/login', formFields)
      console.log('token->', data)
      setToken(data.token)
      // navigate to home after successful login
      navigate('/')
    } catch (err) {
      setError(err.response.data.message)
      console.log(err.response.data.message)
      // setError({ ...error, [e.target.name]: '', message: '' })
    }
  }

  const handleChange = (e) => {
    // // This happens on any change to the form
    // // create shallow copy of form fields by spreading in to a new object
    // const updatedFormFields = { ...formFields }
    // // set key name to value entered into form field
    // updatedFormFields[e.target.name] = e.target.value
    // // set formFields = updatedFormFields
    // setFormFields(updatedFormFields)
    // // remove any errors
    setFormFields({ ...formFields, [e.target.name]: e.target.value })
  }

  return (
    <div className="hero-page text-center form-main">
      <h1 className="mt-5">Login</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <input
            required
            className="form-control mt-3 mb-3"
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Email *"
            value={formFields.email}
          />
          {/* Password */}
          <input
            required
            className="form-control mt-3 mb-5"
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Password *"
            value={formFields.password}
          />
          {/* Error Message */}
          {error && <small className='text-danger'>{error}</small>}
          {/* {error && error.message && <small className='text-danger'>{error.message}</small>} */}
          <button to={'/'} className="btn btn-danger btn-lg mt-3 mb-3">Login</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
