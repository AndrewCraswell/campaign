// Example {PrismicAuthor.url}.js file

import React from "react";
import { graphql } from "gatsby";
import { Card, Col, Row } from "react-bootstrap";
import "../style/main.scss";
import { Carousel } from "react-bootstrap";

export const HomeCarousel = (props) => {
  const { data } = props;

  return (
    <div style={{ marginTop: "90px" }}>
      <Carousel interval={1300}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={data?.heroimage?.localFile?.publicURL}
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3> Together we can make better country</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={data?.heroimage?.localFile?.publicURL}
            alt="Second slide"
          />

          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={data?.heroimage?.localFile?.publicURL}
            alt="Third slide"
          />

          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
