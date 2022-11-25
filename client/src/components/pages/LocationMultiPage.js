/* eslint-disable comma-dangle */
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineWaterDrop } from 'react-icons/md'
import { GrRestroom } from 'react-icons/gr'
import { TbParking } from 'react-icons/tb'

import FilterSearch from '../common/FilterSearch'
import SpinnerItem from '../common/SpinnerItem'
import Container from 'react-bootstrap/Container'
import InfographicMulti from '../common/InfographicMulti'

import Row from 'react-bootstrap/Row'
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
    <div className="site-wrapper">
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
                    xs="12"
                    sm="12"
                    md="6"
                    lg="4"
                    xl="4"
                    className="char-card mb-4"
                  >
                    <Link
                      className="text-decoration-none"
                      to={`/locations/${id}`}
                    >
                      <Card className="location-card">
                        <div
                          className="card-image"
                          style={{ backgroundImage: `url(${image[0]})` }}
                        ></div>
                        <Card.Body className="d-flex flex-column">
                          <div className='location-card-header' id='index-header'>
                            <div className='index-page-title'>
                              <h4 className='location-card-title mb-4' id='index-title'>{name}</h4>
                              <p className='card-code-multi' id='index-code'>{countryCode}</p>
                            </div>
                            <div className='index-review-container'>
                              <p className='card-avg-index'><span className='index-rating'>{loc.avgRating} &#9733;</span></p>
                            </div>
                          </div>
                          <InfographicMulti location={loc} />
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                )
              })}
            </Row>
          ) : errors ?
            <h2>Something has gone wrong, my sincere apologies...</h2>
            :
            <SpinnerItem />
          }
        </Container>
      </main>
    </div>

  )
}

export default LocationMultiPage
