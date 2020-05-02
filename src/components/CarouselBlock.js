import React from "react";
import caro1 from "../mediaFiles/caro1.png";
import caro2 from "../mediaFiles/caro2.png";
import caro3 from "../mediaFiles/caro3.png";

export const CarouselBlock = props => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={caro1} className="d-block w-100" alt="Amazing deals of samsung galaxy" />
        </div>
        <div className="carousel-item">
          <img src={caro2} className="d-block w-100" alt="responsive website carousal" />
        </div>
        <div className="carousel-item">
          <img src={caro3} className="d-block w-100" alt="Mobile development carousal" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
  </div>
  );
};
