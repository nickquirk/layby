// React imports
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

// Bootstrap imports
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem'
import axios from 'axios'


const UserProfilePage = () => {
  // ! State
  const [user, setUser] = useState([])
  // ! Location
  const { userId } = useParams()
  // ! Execution
  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios.get(`/api/profile/${userId}`)
        setUser(data)
      } catch (err) {
        console.log(err)
      }
    }
    getUser()
  }, [userId])
  // ! JSX
  return (
    <>
      <Container className='profile-page-container'>
        <Row className='text-center'>
          <Col md="4" className='text-center'>
            <div className='user-details d-flex flex-column align-items-center'>
              <h3>Username</h3>
              <img className='img-thumbnail profile-pic' src="https://tinyurl.com/2p8e3n27"></img>
              <Link className='btn mt-3 align-self-center'>Upload Pic</Link>
              <textarea className='mt-3'  rows="">User info will go here...</textarea>
              <Link className='btn mt-3 align-self-center'>Save</Link>
            </div>
          </Col>
          <Col md="8">
            <div className='user-reviews'>
              <h3>Your Reviews</h3>
              <ListGroup className='ms-1'>
                <ListGroupItem className='d-flex review-list list-group-item-action'>
                  <div>
                    <img className='list-group-img' src='https://tinyurl.com/5atpj5f8'></img>
                  </div>
                  <div className='d-flex flex-column align-items-start ms-3'>
                    <h4>Location</h4>
                    <p className='d-none d-sm-block'>Some paragraph text</p>
                  </div>
                  <div className='d-flex flex-column buttons align-self-start'>
                    <Link className='btn'>Edit</Link>
                    <Link className='btn'>Delete</Link>
                  </div>
                </ListGroupItem>
              </ListGroup>
            </div> 
            <div className='user-favourites mt-4'>
              <h3>Favourite Places</h3>
              <div className='favourite-card-container'>
                <Row>
                  <Col md="6"  xs="6">
                    <Card className='favourite-card'>
                      <Card.Body>
                        <Card.Img variant='top' src='https://tinyurl.com/5atpj5f8'/>
                        <Card.Title>Location Name</Card.Title>
                        <Card.Subtitle>Country here</Card.Subtitle>
                        <Card.Link>Link to location</Card.Link>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md="6" xs="6">
                    <Card className='favourite-card'>
                      <Card.Body>
                        <Card.Img variant='top' src='https://tinyurl.com/5atpj5f8'/>
                        <Card.Title>Location Name</Card.Title>
                        <Card.Subtitle>Country here</Card.Subtitle>
                        <Card.Link>Link to location</Card.Link>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md="6" xs="6">
                    <Card className='favourite-card'>
                      <Card.Body>
                        <Card.Img variant='top' src='https://tinyurl.com/5atpj5f8'/>
                        <Card.Title>Location Name</Card.Title>
                        <Card.Subtitle>Country here</Card.Subtitle>
                        <Card.Link>Link to location</Card.Link>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md="6" xs="6">
                    <Card className='favourite-card'>
                      <Card.Body>
                        <Card.Img variant='top' src='https://tinyurl.com/5atpj5f8'/>
                        <Card.Title>Location Name</Card.Title>
                        <Card.Subtitle>Country here</Card.Subtitle>
                        <Card.Link>Link to location</Card.Link>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default UserProfilePage