import { useState } from 'react'
import { Link } from 'react-router-dom'

const RegisterPage = () => {

  // ! State 
  // Track state of following variables
  const [ username, setUsername ] = useState('')
  const [ email, setEmail] = useState('')
  const [ password, setPassword ] = useState('')

  // ! Executions 
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    const input = e.target.value
  }

  return (
    <div className='hero-page text-center form-main'>
      <h1>Register Page</h1>
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <input required className='form-control' type="text" name="username" onChange={handleChange} placeholder="Username"/>
          <input required className='form-control' type="email" name="email" onChange={handleChange} placeholder="Email"/>
          <input required className='form-control' type="password" name="password" onChange={handleChange} placeholder="Password"/>
          <input required className='form-control' type="password" name="passwordConfirmation" onChange={handleChange} placeholder="Confirm password"/>
          <Link to={'/login'} className='btn btn-main'>Submit</Link>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage