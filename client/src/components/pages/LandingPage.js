/* eslint-disable prefer-const */
/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
import axios from 'axios'
import van from '../images/van.jpeg'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import FilterSearch from '../common/FilterSearch'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const LandingPage = () => {
  const navigate = useNavigate()

  const [locations, setLocations] = useState([])
  // let [shuffled, setShuffled] = useState([])
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/locations')
        setLocations(data)
      } catch (err) {
        console.log(err.message)
        setErrors(true)
      }
    }
    getData()
  }, [])

  const navigateToLogin = () => {
    navigate('/login')
  }

  const navigateToRegister = () => {
    navigate('/register')
  }

  const navigateToLocationIndex = () => {
    navigate('/locations')
  }

  // useEffect(() => {
  //   const getRandomLocations = () => {
  //     for (let i = locations.length - 1; i > 0; i--) {
  //       const shuffled = (Math.floor(Math.random() * (i + 1))[
  //         (locations[i], locations[shuffled])
  //       ] = [locations[shuffled], locations[i]])
  //     }
  //     setShuffled(shuffled)
  //     console.log('This is shuffled', shuffled)
  //   }
  //   getRandomLocations()
  // }, [locations])

  // useEffect(() => {
  //   const getRandomLocations = () => {
  //     const shuffledArray = [...locations].sort(() =>
  //       Math.floor(Math.random() * locations.length)
  //     )
  //     setShuffled(shuffledArray)
  //     console.log('This is shuffled', shuffled)
  //   }
  //   getRandomLocations()
  // }, [locations])

  return (
    <main className="landing-page">
      <Container fluid className="char-container">
        <Row>
          <div
            className="col-xs-1 text-center "
            id="hero"
            style={{ backgroundImage: `url(${van})` }}
          >
            <Button
              className="button location-index-button mt-3 mb-3"
              onClick={() => navigateToLocationIndex()}
            >
              Find a place to stay
            </Button>
          </div>
        </Row>
        <Row className="top-rated">
          <div className="display-top-rated text-center">
            <h2>Discover Top Rated Spots</h2>
          </div>
          {locations.slice(0, 4).map((loc) => {
            const {
              name,
              flag,
              countryCode,
              description,
              freeparking,
              image,
              toilets,
              water,
              id
            } = loc
            return (
              <Col key={id} sm="6" md="3" className="char-card mb-4">
                <Link className="text-decoration-none" to={`/location/${id}`}>
                  <Card className="location-card">
                    <div
                      className="card-image"
                      style={{ backgroundImage: `url(${image})` }}
                    ></div>
                    <Card.Body className="d-flex flex-column">
                      <h4>
                        <span>{name}</span>
                      </h4>
                      <span>{flag}</span>
                      <p>{description}</p>
                      <span></span>
                      <div className="icon-container d-flex justify-content-evenly">
                        <div className="icon">
                          {toilets === false ? <span></span> : <span>🚾</span>}
                        </div>
                        <div className="icon">
                          {freeparking === false ? (
                            <span></span>
                          ) : (
                            <span>🅿️</span>
                          )}
                        </div>
                        <div className="icon">
                          {water === false ? <span></span> : <span>💧</span>}
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            )
          })}
        </Row>
        <Row id="login-register">
          <h4 className="text-center">Leave a Review or Post a New Van Spot</h4>
          <div
            id="login-register-buttons"
            className="col border-end  d-flex justify-content-center align-items-center"
          >
            <Button
              className="button login-button mt-3 mb-3 "
              onClick={() => navigateToLogin()}
            >
              Login
            </Button>
            <Button
              className="button register-button mt-3 mb-3"
              onClick={() => navigateToRegister()}
            >
              Register
            </Button>
          </div>
        </Row>
        <Row id="tickertape">
          <div className="ticker-tape-div text-center">
            <div data-mc-src="359dbd97-d501-4e1d-8a2f-8e00870bd464#instagram"></div>
          </div>
        </Row>
      </Container>
    </main>
  )
}

export default LandingPage
