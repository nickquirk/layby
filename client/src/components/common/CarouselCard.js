import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import InfographicMulti from './InfographicMulti'



const CarouselCardController = ({ locations }) => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <>
      {locations ?
        <Carousel activeIndex={index} onSelect={handleSelect} className='landing-page-carousel' variant='dark' interval="5000" indicatorLabels="false" >
          {
            locations.map(loc => {
              const {
                name,
                countryCode,
                description,
                freeparking,
                currency,
                parking,
                image,
                toilets,
                water,
                id,
              } = loc
              return (
                <Carousel.Item key={id}>
                  <Row className="top-rated">
                    <Col
                      key={id}
                      sm="6"
                      md="6"
                      lg="3"
                      xl="3"
                      className="char-card mb-4"
                    >
                      <Link className="text-decoration-none" to={`/locations/${id}`}>
                        <Card className="landing-location-card d-flex">
                          <div className="landing-card-image" style={{ backgroundImage: `url(${image[0]})` }}></div>
                          <Card.Body className="d-flex flex-column">
                            <div className='landing-card-header'>
                              <h4 className='landing-card-title'>{name}</h4>
                              <p id='card-code'>{countryCode}</p>
                            </div>
                            <p className="card-text-lp">{description}</p>
                            <div className="icon-container d-flex justify-content-evenly" id='landing-page-icon-container'>
                              <InfographicMulti location={loc} />
                            </div>
                          </Card.Body>
                        </Card>
                      </Link>
                    </Col>
                  </Row>
                </Carousel.Item>
              )
            })
          }
        </Carousel>
        :
        <h1>Loading</h1>
      }
    </>
  )
}

export default CarouselCardController