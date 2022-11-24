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

//Imports
import axios from 'axios'

//Custom imports 
import { getToken } from '../common/Auth.js'
import UploadImage from '../../helpers/UploadImage.js'

const UserProfilePage = () => {
  // ! State
  const [user, setUser] = useState([])
  const [errors, setErrors] = useState(false)
  const [ formData, setFormData ] = useState({
    profileImage: '',
    userBio: '',
  })

  // ! Location
  const { userId } = useParams()

  // ! Execution
  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios.get(`/api/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        })
        setUser(data)
        console.log(data.reviews)
        console.log('This is data ->', data)
        console.log('user.reviews ->', data.reviews[0])
      } catch (err) {
        console.log(err)
        setErrors(true)
      }
    }
    getUser()
  }, [userId])

  const handleChange = async (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }


  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const { data } = await axios.put(`/api/users/${userId}`, formData, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      setUser(data)
    } catch (err) {
      console.log(err)
    }
  }

  //useEffect(() => console.log('user useEffect ->',user))

  // ! JSX
  return (
    <>
      <Container className='profile-page-container'>
        <Row className='text-center'>
          <Col md="4" className='text-center'>
            <div className='user-details d-flex flex-column align-items-center'>
              <h3>{user.username}</h3>
              <img className='img-thumbnail profile-pic' src={`${user.profileImage}`}></img>
              <UploadImage 
                imageFormData={formData}
                setFormData={setFormData}
              />
              <Link onClick={handleSubmit} className='btn mt-3 align-self-center'>Upload Pic</Link>
              <textarea
                className='mt-3 user-bio field'  
                name="userBio"
                rows="3"
                value={formData.userBio}
                onChange={handleChange}
              >
              </textarea>
              <Link className='btn mt-3 align-self-center'>Save</Link>
            </div>
          </Col>
          <Col md="8">
            <div className='user-reviews'>
              <h3>Your Reviews</h3>
              <>
                {user.reviews ? (
                  <ListGroup className='ms-1'>
                    {user.reviews.map(location => {
                      const { reviews } = location
                      console.log(reviews)
                      return reviews.map(review => {
                        return (
                          <p key={review._id}>{review.text}</p>
                        )
                      })
                    })}
                  </ListGroup>
                ) : errors ? (
                  <h2>Error...</h2>
                ) : (
                  <h2>No reviews</h2>
                )}
              </>
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