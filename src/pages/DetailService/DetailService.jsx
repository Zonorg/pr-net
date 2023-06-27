import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./serv.css";
import Error404 from "../../components/Error404/Error404";

const DetailService = () => {
  const [service, setService] = useState(null);
  const [totalServices, setTotalServices] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getServiceById = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/services/${id}`);
        setService(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const getTotalServices = async () => {
      try {
        const response = await axios.get("http://localhost:3001/services");
        setTotalServices(response.data.length); //Para ver la cantidad total de la api de servicios
      } catch (error) {
        console.log(error);
      }
    };

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

  if (!service) {
    return <Error404 />;
  }

  return (
    <div className="servInfo">
      <h2>{service.name}</h2>
      <img src={service.image} alt={service.name} />
      <p>{service.description}</p>
      <p>$ {service.price.toLocaleString()}</p>
      <button className="btn btn-primary custom-btn">Comprar ahora</button>
      <Link className="btn custom-btn" to="/services">
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
