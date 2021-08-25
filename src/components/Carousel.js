// Example {PrismicAuthor.url}.js file

import React from "react";
import { graphql } from "gatsby";
import { Card, Col, Row } from "react-bootstrap";
import "../style/main.scss";
import { Carousel } from "react-bootstrap";

export const HomeCarousel = (props) => {
  const { data } = props;
  console.log("data", data);
  return (
    <div 
    style={{ marginTop: "90px" }}
    >
      <Carousel interval={1300}>
       
        {data?.heroimages.map((i, index) => {
          return (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={i?.image?.localFile?.publicURL}
                alt="First slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
