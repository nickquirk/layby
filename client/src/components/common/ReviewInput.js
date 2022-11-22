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
  })
  const [errors, setErrors] = useState(null)


  // ! Submit Review Functions
  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios.get(`/api/profile/${userId}`, {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        })
        const username = data.username
        setFormFields({ username: username })
        console.log('User Data->', data)
      } catch (err) {
        console.log(err)
      }
    }
    getUser()
  }, [reviews])


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post(`/api/locations/${locationId}/review`, formFields, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      console.log('Success -->', data.reviews)
      setFormFields({ text: '' })
      console.log('Form fields->', formFields)
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


  // ! Display Review Executions
  useEffect(() => {
    setReviews(location.reviews)
  }, [location])



  const handleClick = () => {
    const checkLocation = async () => {
      try {
        const { data } = await axios.get(`/api/locations/${locationId}`)
        console.log(data.reviews)
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
        console.log(data.reviews)
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
            placeholder="Type your review here *"
            value={formFields.text}
          />
          {errors && errors.text && <small className="text-danger">{errors.text}</small>}
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
              <span>Star Rating</span>
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
