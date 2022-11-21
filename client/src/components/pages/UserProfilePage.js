// Bootstrap imports
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem'


const UserProfilePage = () => {
  return (
    <>
      <Container className='profile-page-container'>
        <Row className='text-center'>
          <Col md="4" className='text-center'>
            <div className='user-details'>
              <h3>Username</h3>
              <img className='img-thumbnail profile-pic' src="https://tinyurl.com/2p8e3n27"></img>
              <p>User info will go here...</p>
            </div>
          </Col>
          <Col md="8">
            <div className='user-reviews'>
              <h3>User Reviews</h3>
              <ListGroup>
                <ListGroupItem>Review 1</ListGroupItem>
                <ListGroupItem>Review 2</ListGroupItem>
              </ListGroup>
              <Card className='review-card sm-4'>
                <Card.Body>
                  <Card.Img className='card-image' variant='top' src='https://tinyurl.com/5atpj5f8'/>
                  <Card.Title>Location Name</Card.Title>
                  <Card.Subtitle>Country here</Card.Subtitle>
                  <Card.Text>Review text here...</Card.Text>
                  <Card.Link>Link to review</Card.Link>
                </Card.Body>
              </Card>
            </div> 
            <div className='user-favourites'>
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