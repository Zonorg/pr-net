import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import "./serv.css";
import Error404 from "../../components/Error404/Error404";
import servicesData from "../../../dbServices.json";

const DetailService = () => {
  const [service, setService] = useState(null);
  const [totalServices, setTotalServices] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getServiceById = () => {
      const service = servicesData.find((service) => service.id === parseInt(id));
      if (service) {
        setService(service);
      } else {
        console.log("Service not found");
      }
      setIsLoading(false);
    };

    const getTotalServices = () => {
      setTotalServices(servicesData.length);
    };

    setIsLoading(true);
    getServiceById();
    getTotalServices();
  }, [id]);

  const handleNextService = () => {
    const nextId = parseInt(id) + 1;

    if (nextId > totalServices) {
      navigate(`/services/1`); // Volver al primer servicio
    } else {
      navigate(`/services/${nextId}`);
    }
  };

  const handlePreviousService = () => {
    if (parseInt(id) === 1) {
      navigate(`/services/${totalServices}`);
    } else {
      const previousId = parseInt(id) - 1;
      navigate(`/services/${previousId}`);
    }
  };

  if (isLoading) {
    return (
      <div className="loading-spinner">
        <ClipLoader color="#123abc" loading={isLoading} size={50} />
      </div>
    );
  }

  if (!service) {
    return <Error404 />;
  }
  
  return (
    <div className="servInfo">
      <h2>{service.name}</h2>
      <img src={service.image} alt={service.name} />
      <p>{service.description}</p>
      <p>$ {service.price.toLocaleString()}</p>
      <Link className="btn btn-primary custom-btn" to="/services">
        Ir atrás
      </Link>
      <button className="back-btn btn custom-btn" onClick={handlePreviousService}>
        {"<"}
      </button>
      <button className="next-btn btn custom-btn" onClick={handleNextService}>
        {">"}
      </button>
    </div>
  );
};

export default DetailService;
