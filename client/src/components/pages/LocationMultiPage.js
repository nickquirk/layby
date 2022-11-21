/* eslint-disable comma-dangle */
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineWaterDrop } from 'react-icons/md'
import { GrRestroom } from 'react-icons/gr'
import { TbParking } from 'react-icons/tb'

import FilterSearch from '../common/FilterSearch'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const LocationMultiPage = () => {
  const [locations, setLocations] = useState([])
  const [errors, setErrors] = useState(false)
  const [filteredLocations, setFilteredLocations] = useState([])

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

  return (
    <main className="location-index">
      <Container className=" fluid char-container mt-4">
        <FilterSearch
          locations={locations}
          filteredLocations={filteredLocations}
          setFilteredLocations={setFilteredLocations}
        />
        {filteredLocations.length ? (
          <Row>
            {filteredLocations.map((loc) => {
              const {
                name,
                countryCode,
                flag,
                description,
                freeparking,
                image,
                toilets,
                water,
                id
              } = loc
              return (
<<<<<<< HEAD
                <Col
                  key={id}
                  sm="6"
                  md="6"
                  lg="3"
                  xl="3"
                  className="char-card mb-4"
                >
                  <Link
                    className="text-decoration-none"
                    to={`/locations/${id}`}
                  >
=======
                <Col key={id} sm="6" md="3" lg='3' xl='3' className="char-card mb-4">
                  <Link className="text-decoration-none" to={`/locations/${id}`}>
>>>>>>> development
                    <Card className="location-card">
                      <div
                        className="card-image"
                        style={{ backgroundImage: `url(${image[0]})` }}
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
        ) : errors ? (
          <h2>Something has gone wrong, my sincere apologies...</h2>
        ) : (
          <h2>Loading...</h2>
        )}
      </Container>
    </main>
  )
}

export default LocationMultiPage
