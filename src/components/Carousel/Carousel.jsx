import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "./carousel.css";

const CarouselComp = () => {
  return (
    <Carousel className="carousel" interval={5000} wrap={true}>
      <Carousel.Item className="carouselItem">
        <img className="carouselImg" src="../../img/carousel1.jpg" alt="carousel3" />
        <Carousel.Caption className="carouselDiv">
          <div className="carouselBox">
            <h3 className="carouselH3">
              Garantizando la seguridad
              <br /> de tu infraestructura
            </h3>
            <Link className="carouselLink" to="/services">
              Ver más
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselItem">
        <img className="carouselImg" src="../../img/carousel2.jpg" alt="carousel2" />
        <Carousel.Caption className="carouselDiv">
          <div className="carouselBox">
            <h3 className="carouselH3">
              Fortaleciendo tus <br />
              defensas digitales
            </h3>
            <Link className="carouselLink" to="/services/1">
              Ver más
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselItem">
        <img className="carouselImg" src="../../img/carousel3.jpeg" alt="carousel3" />
        <Carousel.Caption className="carouselDiv">
          <div className="carouselBox">
            <h3 className="carouselH3">
              Profesionales en protección <br /> contra ataques informáticos
            </h3>
            <Link className="carouselLink" to="/us">
              Ver más
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComp;
