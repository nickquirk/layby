/* eslint-disable comma-dangle */
// * React
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// * Imports
import axios from 'axios'
import { getToken } from './Auth'
import { isAuthenticated } from './Auth'
import { getUserId } from './Auth'

// * Bootstrap
import Col from 'react-bootstrap/Col'


const ReviewInput = ({ location }) => {

  const { locationId } = useParams()
  const userId = getUserId()

  // ! State
  const [reviews, setReviews] = useState([])
  const [updatedReviews, setUpdatedReviews] = useState([])
  const [formFields, setFormFields] = useState({
    text: '',
    username: '',
    rating: '',
  })
  const [errors, setErrors] = useState(null)


  // ! Submit Review Functions
  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios.get(`/api/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        })
        const username = data.username
        setFormFields({ ...formFields, username: username })
      } catch (err) {
        console.log('Get my token error->', err)
      }
    }
    getUser()
  }, [])


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post(`/api/locations/${locationId}/review`, formFields, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      setFormFields({ text: '', rating: '' })
      console.log(formFields)
    } catch (err) {
      console.log('hello ->', err.response.data)
      setErrors(err.response.data)
    }
  }

  const handleChange = (e) => {
    const updatedFormFields = { ...formFields }
    updatedFormFields[e.target.name] = e.target.value
    setFormFields(updatedFormFields)
    setErrors({ ...errors, [e.target.name]: '', message: '' })
  }


  // ! Display Review Executions
  useEffect(() => {
    setReviews(location.reviews)
  }, [location])



  const handleClick = () => {
    const checkLocation = async () => {
      try {
        const { data } = await axios.get(`/api/locations/${locationId}`)
        setReviews(data.reviews)
      } catch (err) {
        console.log(err)
      }
    }
    checkLocation()
  }


  useEffect(() => {
    const updateDisplay = async () => {
      try {
        const { data } = await axios.get(`/api/locations/${locationId}`)
        setUpdatedReviews(data.reviews)
      } catch (err) {
        console.log(err)
      }
    }
    updateDisplay()
  }, [reviews])

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
          <button className='btn btn-primary' onClick={handleClick}>Submit</button>
        </form>
        :
        <></>
      }
      <>
        <h1 className='community-reviews'>Community Reviews:</h1>
        {reviews ? updatedReviews.map(rev => {
          const { _id } = rev
          return (
            <div className='review-display' key={_id}>
              <h4>{rev.username}</h4>
              <span>Ratingfdfg: {rev.rating}/10</span>
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
