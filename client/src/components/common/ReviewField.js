/* eslint-disable comma-dangle */
//React
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

// imports
import axios from 'axios'
import { getToken } from '../common/Auth'


import Col from 'react-bootstrap/Col'
import { isAuthenticated } from './Auth'


const ReviewField = () => {

  const navigate = useNavigate()

  // State
  const [formFields, setFormFields] = useState({
    text: '',
    // rating: null,
  })

  const [errors, setErrors] = useState(null)


  // Location 
  const { locationId } = useParams()

  //Execution
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log('GET TOKEN -->', getToken())
      const { data } = await axios.post(`/api/locations/${locationId}/review`, formFields, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      console.log('Success -->', data)
      navigate(`/locations/${locationId}`)
    } catch (err) {
      console.log('hello ->', err.response.data)
      setErrors(err.response.data)
    }
    console.log('form submitted')
  }

  const handleChange = (e) => {
    const updatedFormFields = { ...formFields }
    updatedFormFields[e.target.name] = e.target.value
    setFormFields(updatedFormFields)
    setErrors({ ...errors, [e.target.name]: '', message: '' })
  }


  return (
    <Col md="6">
      {isAuthenticated() ?
        <form onSubmit={handleSubmit}>
          <p>Leave Review:</p>
          <input
            required
            className='form-control'
            type="text"
            name="text"
            onChange={handleChange}
            placeholder="Type your review here *"
            value={formFields.text}
          />
          {errors && errors.text && <small className="text-danger">{errors.text}</small>}
          <button className='btn btn-primary'>Submit</button>
        </form>
        :
        <></>
      }
      <div className='current-reviews'>
        Reviews
      </div>
    </Col>
  )
}

export default ReviewField
