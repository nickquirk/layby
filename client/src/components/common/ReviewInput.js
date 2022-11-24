/* eslint-disable comma-dangle */
// * React
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// * Imports
import axios from 'axios'
import { getToken } from './Auth'
import { isAuthenticated } from './Auth'
import { getUserId, getPayload } from './Auth'

// * Bootstrap
import Col from 'react-bootstrap/Col'


const ReviewInput = ({ location, setLocation }) => {

  const { locationId } = useParams()

  const [formFields, setFormFields] = useState({
    text: '',
    rating: '',
  })
  const [errors, setErrors] = useState(null)



  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post(`/api/locations/${locationId}/review`, formFields, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      setFormFields({ text: '', rating: '' })
      const { data } = await axios.get(`/api/locations/${locationId}`)
      setLocation(data)
      console.log(formFields)
    } catch (err) {
      console.log('hello ->', err.response.data)
      console.log('Form-<', formFields)
      setErrors(err.response.data)
    }
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
          <textarea
            required
            className='form-control'
            type="text"
            name="text"
            onChange={handleChange}
            placeholder="Type your review here: "
            value={formFields.text}
          />
          {errors && errors.text && <small className="text-danger">{errors.text}</small>}
          <span>Rating:</span>
          <input type='number' name='rating' min="1" max="5" onChange={handleChange} value={formFields.rating}></input>
          {errors && errors.text && <small className="text-danger">{errors.text}</small>}
          <hr></hr>
          <button className='btn btn-primary'>Submit</button>
        </form>
        :
        <></>
      }
      <>
        <h3 className='community-reviews mb-3'>Community Reviews</h3>
        {location ? location.reviews.map(rev => {
          const { _id } = rev
          console.log('REv->', rev.owner.username)
          return (
            <div className='review-display' key={_id}>
              <h4>{rev.owner.username}</h4>
              <span>Rating:{rev.rating} /10</span>
              <p>{rev.text}</p>
            </div>
          )
        })
          :
          <></>
        }
      </>
    </Col>
  )
}

export default ReviewInput
