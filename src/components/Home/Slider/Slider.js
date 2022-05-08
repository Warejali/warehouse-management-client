import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    return (
        <div>
            <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/M6v4Wyn/Banner-01.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>PACKAGING AND STORAGE</h3>
      <p>Transport has access to over a ten million square feet of storage space</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/fvtBT9F/banner-03.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Transport management</h3>
      <p>Transport offers a host of logistic management services </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/H2T9xZ3/Banner-03.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>LOGISTIC SERVICE</h3>
      <p>Transport offers a host of logistic management services </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Slider;