/* eslint-disable prefer-const */
/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
import axios from 'axios'
import van from '../images/van.jpeg'
import login from '../images/login.jpg'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { MdOutlineWaterDrop } from 'react-icons/md'
import { GrRestroom } from 'react-icons/gr'
import { TbParking } from 'react-icons/tb'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const LandingPage = () => {
  const navigate = useNavigate()

  const [locations, setLocations] = useState([])
  let [shuffled, setShuffled] = useState([])
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
  
  
  useEffect(() => {
    const getRandomLocations = () => {
      for (let i = locations.length - 1; i > 0; i--) {
        const shuffled = (Math.floor(Math.random() * (i + 1))[
          (locations[i], locations[shuffled])
        ] = [locations[shuffled], locations[i]])
      }
      setShuffled(shuffled)
      console.log('This is shuffled', shuffled)
    }
    getRandomLocations()
  }, [locations])

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
              className="btn  btn-lg mt-3 mb-3"
              onClick={() => navigateToLocationIndex()}
            >
              Find a place to stay
            </Button>
          </div>
        </Row>
        <Row className="top-rated">
          <div className="display-top-rated text-center">
            <h2 className="m-5">Discover Top Rated Spots</h2>
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
              <Col
                key={id}
                sm="6"
                md="6"
                lg="3"
                xl="3"
                className="char-card mb-4"
              >
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
                      <p className="card-text">{description}</p>
                      <span></span>
                      <div className="icon-container d-flex justify-content-evenly">
                        <div className="icon">
                          {toilets === false ? (
                            <></>
                          ) : (
                            <div className="ifg" id="restroom-ifg">
                              <GrRestroom />
                            </div>
                          )}
                        </div>
                        <div className="icon">
                          {freeparking === false ? (
                            <></>
                          ) : (
                            <div className="ifg" id="parking-ifg">
                              <TbParking />
                            </div>
                          )}
                        </div>
                        <div className="icon">
                          {water === false ? (
                            <></>
                          ) : (
                            <div className="ifg" id="water-ifg">
                              <MdOutlineWaterDrop />
                            </div>
                          )}
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            )
          })}
        </Row>
        <Row>
          <div id="login-register" style={{ backgroundImage: `url(${login})` }}>
            <h2 className=" m-5 text-center text-white">
              Review or Post a New Van Spot
            </h2>
            <div
              id="login-register-buttons"
              className="col border-end d-flex justify-content-center align-items-center"
            >
              <Button
                type="button"
                className="btn btn-lg mt-5 mb-4"
                onClick={() => navigateToLogin()}
              >
                Login
              </Button>
              <Button
                type="button"
                className="btn  btn-lg mt-5 mb-4"
                onClick={() => navigateToRegister()}
              >
                Register
              </Button>
            </div>
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
