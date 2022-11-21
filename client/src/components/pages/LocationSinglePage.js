import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

// Bootstrap components
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'


const LocationSinglePage = () => {
  // ! State
  const [location, setLocation] = useState([])

  // ! Location
  const { locationId } = useParams()

  // ! Execution
  useEffect(() => {
    const getLocation = async () => {
      try {
        const { data } = await axios.get(`/api/locations/${locationId}`)
        setLocation(data)
      } catch (err) {
        console.log(err)
      }
    }
    getLocation()
  }, [locationId])


  return (
    <main className='single-page'>
      <Container className='mt-4'>
        <Row>
          {location ?
            <>
<<<<<<< HEAD
              <div className='header-image col-xs-1' id='hero'>
                <picture className='single-page-hero'>
                  <source media="(min-width: 0px)" srcSet={location.image} />
                  <img className='single-page-hero' src={location.image} alt={location.name} />
                </picture>
                <h1 className='single-page-header'>{location.name}</h1>
              </div>
              <div className='widget-container'>Widget container</div>
=======
              <h1>{location.name}</h1>
              <div className='header-image'></div>
              <img src={location.image} alt={location.name} />
              <div className='widget-container'>Infographic container</div>
>>>>>>> development
              <Col md="6">
                <h2>Description</h2>
                <p>{location.description}</p>
                <h2>Leave a Review</h2>
                <form id="review-form">
                  <textarea form="review-form" id="review" name="user-review" rows="5"></textarea>
                  <Link className='btn btn-main'>Submit</Link>
                </form>
                <h2>Reviews</h2>
              </Col>
            </>
            :
            <h2>Something went wrong...</h2>
          }
        </Row>
      </Container>
    </main>

  )
}

export default LocationSinglePage