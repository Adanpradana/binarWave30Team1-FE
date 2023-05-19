import {Carousel} from "react-bootstrap/";
import React from 'react';
import banner1 from "../../../asset/banner1.jpg"
import banner2 from "../../../asset/banner2.jpg"
import banner3 from "../../../asset/banner3.jpg"
import './Banner.css';

export const Banner = () => {
  return (
   <div className="bg-banner"> 
        <Carousel variant="light">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={banner3}
                alt="First slide"
                style={{height:'860px'}}
                />
                <Carousel.Caption className="text-banner">
                <h5 className="title">First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={banner2}
                alt="Second slide"
                style={{height:'860px'}}
                />
                <Carousel.Caption className="text-banner">
                <h5 className="title">Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={banner1}
                alt="Third slide"
                style={{height:'860px'}}
                />
                <Carousel.Caption className="text-banner">
                <h5 className="title">Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
  </div>
  )
}
