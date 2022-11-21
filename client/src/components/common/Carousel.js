import { useState, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel'

const CarouselController = ({ location }) => {
  const [index, setIndex] = useState(0)
  const [images, setImages] = useState([])

  useEffect(() => {
    setImages(location.image)
  }, [location])

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <>
      {images ?
        <>
          <Carousel activeIndex={index} onSelect={handleSelect} className='header-image'>
            {images.map(img => {
              return (
                <Carousel.Item key={img}>
                  <img
                    className="d-block w-100"
                    src={img}
                    alt="No Pretty Pictures Yet"
                    key={img}
                  />
                </Carousel.Item>
              )
            })}
          </Carousel>
        </>
        :
        <h1>Loading</h1>
      }
    </>
  )
}

export default CarouselController