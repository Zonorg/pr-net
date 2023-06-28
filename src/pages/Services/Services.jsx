import "./services.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import dbServices from "../../../dbServices";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(dbServices);
  }, []);

  return (
    <div className="serviceDiv">
      <main>
        <div className="servicesDiv">
          <h2>Servicios</h2>
          <div className="cardContainer">
            {services.map((service) => (
              <div className="cardService" key={service.id}>
                <img src={service.image} alt={service.title} />
                <h3 className="cardH3">{service.name}</h3>
                <p className="cardPrice">$ {service.price.toLocaleString()}</p>
                <Link className="cardButton" to={`/services/${service.id}`}>
                  Detalles
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;
