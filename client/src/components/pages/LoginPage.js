import { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {


  // ! State 
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
      <h1>Login Page</h1>
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <input required className='form-control' type="email" name="email" onChange={handleChange} placeholder="Email"/>
          <input required className='form-control' type="password" name="password" onChange={handleChange} placeholder="Password"/>
          <Link to={'/'} className='btn btn-main'>Submit</Link>
        </form>
      </div>
    </div>
  )
}

export default LoginPage