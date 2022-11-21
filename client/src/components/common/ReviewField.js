import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'


const ReviewField = () => {



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
