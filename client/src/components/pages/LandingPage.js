/* eslint-disable prefer-const */
/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
import axios from 'axios'
import van from '../images/van.jpg'
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
  const [errors, setErrors] = useState(false)
  const [filteredLocations, setFilteredLocations] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/locations')
        console.log('data->', data)
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

  // const randomIndex = Math.floor(Math.random() * locations.length)
  // const randomLocation = locations[randomIndex]

  return (
    <main className="landing-page">
      <Container fluid className="char-container">
        <Row>
          <div
            className="col-xs-1 text-center "
            id="hero"
            style={{ backgroundImage: `url(${van})` }}
          >
            <FilterSearch
              className="search-bar mb-4 text-center"
              id="landing-search-bar"
              locations={locations}
              filteredLocations={filteredLocations}
              setFilteredLocations={setFilteredLocations}
            />
          </div>
        </Row>
        <Row className="top-rated">
          <div className="display-top-rated text-center">
            <h2>Top Rated Spots</h2>
          </div>
          {locations.map((loc) => {
            const {
              name,
              countryCode,
              freeparking,
              image,
              toilets,
              water,
              id
            } = loc
            return (
              <Col key={id} sm="6" md="3" className="char-card mb-4">
                <Link className="text-decoration-none" to={`/location/${id}`}>
                  <Card>
                    <div
                      className="card-image"
                      style={{ backgroundImage: `url(${image})` }}
                    ></div>
                    <Card.Body>
                      <h4>{name}</h4>
                      <span>{countryCode}</span>
                      <p>{toilets}</p>
                      <p>{freeparking}</p>
                      <p>{water}</p>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            )
          })}
        </Row>
        <Row id="login-register">
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
          <div className="ticker-tape-div text-center"></div>
          <div data-mc-src="359dbd97-d501-4e1d-8a2f-8e00870bd464#instagram"></div>
        </Row>
      </Container>
    </main>
  )
}

export default LandingPage
