import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import caro1 from "../mediaFiles/caro1.png";
import caro2 from "../mediaFiles/caro2.png";
import caro3 from "../mediaFiles/caro3.png";

export const CarouselBlock = props => {
  return (
    <Carousel className="img-fluid" height="20px">
      <div>
        <img src={caro1} alt="carouselimg1" />
      </div>
      <div>
        <img src={caro2} alt="carouselimg2" />
      </div>
      <div>
        <img src={caro3} alt="carouselimg3" />
      </div>
    </Carousel>
  );
};
