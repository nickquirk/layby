
import { useEffect, useState, useNavigate } from 'react'
import axios from 'axios'


import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'


const ReviewField = () => {

  const navigate = useNavigate()

  // Track state of following variables
  const [formFields, setFormFields] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/api/login', formFields)
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
    <Col md="6">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicReview">
          <Form.Label>Leave Review</Form.Label>
          <Form.Control type="text" placeholder="Type your review here..." />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Button className='btn-primary' type="submit">Submit</Button>
      </Form>
    </Col>
  )
}

export default ReviewField
