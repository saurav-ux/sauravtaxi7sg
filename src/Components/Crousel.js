import Carousel from 'react-bootstrap/Carousel';
import React from 'react'

function Crousel() {
  return (
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="crousel1.png"
        alt="First slide"
      />
     
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="crousel4.png"
        alt="Second slide"
      />

      
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="crousel3.png"
        alt="Third slide"
      />

     
    </Carousel.Item>
  </Carousel>
  )
}

export default Crousel
