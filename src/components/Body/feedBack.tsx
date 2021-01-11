import React, { useState } from 'react'
import './body.css'
import Carousel from 'react-bootstrap/Carousel'
import modelS from '../../images/modelS.jpg';
import modelY from '../../images/modelY.jpg';
import interior from '../../images/interior.jpg';

export const FeedBack = () => {

    return (
        <div className="slider">
    <Carousel>
  <Carousel.Item>
    <img
    width="100%"
    height="100%"
      className="d-block w-100"
      src={interior}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Interior</h3>
      <p>Model S sets an industry standard for performance and safety. </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    width="100%"
    height="100%"
      className="d-block w-100"
      src={modelY}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Model Y</h3>
      <p>Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    width="100%"
    height="100%"
      className="d-block w-100"
      src={modelS}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}
