// Imports
import "./home.css";
import { Link } from "react-router-dom";
import CarouselComp from "../../components/Carousel/Carousel";

const Home = () => {
  return (
    <div className="homeDiv">
      <main className="homeMain">
        <CarouselComp />
        <div className="services">
          <h4>Servicios de seguridad cibernética</h4>
          <div className="serviceDiv">
            <img className="serviceImg" src="../../img/services.jpg" alt="segCivernetica" />
            <ul className="serviceUl">
              <li className="serviceLi">
                <div className="serviceTitle">
                  <i className="fas fa-laptop" />
                  <h3>Resguardo</h3>
                </div>
                <p className="serviceText">
                  Los datos de tu empresa pueden quedar resguardados de manera
                  correcta, fiable y flexible.
                </p>
              </li>
              <li className="serviceLi">
                <div className="serviceTitle">
                  <i className="fas fa-laptop" />
                  <h3>Protección</h3>
                </div>
                <p className="serviceText">
                  Ningún incidente en tu infraestructura podrá dejar a tu
                  organización a la deriva, siempre Veeam estará para responder.
                </p>
              </li>
              <li className="serviceLi">
                <div className="serviceTitle">
                  <i className="fas fa-laptop" />
                  <h3>¿Cómo podemos ayudarte?</h3>
                </div>
                <p className="serviceText">
                  Sabemos lo complejo que puede ser gestionar la ciberseguridad
                  en las Pymes, por eso nuestras soluciones proporcionan
                  visibilidad y administración centralizadas de los dispositivos
                  de seguridad sin sacrificar la eficiencia y la calidad de la
                  experiencia del cliente.
                </p>
              </li>
            </ul>
          </div>
          <div className="linkDiv">
            <Link className="serviceLink" to="/services">
              Explorar
            </Link>
          </div>
        </div>

        <div className="thirdDiv">
          <h4>Aspectos Diferenciales</h4>

          <div className="cardsDiv">
            <div className="card scale-105">
              <img className="cardImg" src="/img/analytics.svg" alt="" />
              <h5 className="cardTitle">Analytics</h5>
            </div>
            <div className="card scale-105">
              <img className="cardImg" src="/img/cloud.svg" alt="" />
              <h5 className="cardTitle">Respaldo de datos</h5>
            </div>
            <div className="card scale-105">
              <img className="cardImg" src="/img/progress.svg" alt="" />
              <h5 className="cardTitle">Continuidad</h5>
            </div>
            <div className="card scale-105">
              <img className="cardImg" src="/img/security.svg" alt="" />
              <h5 className="cardTitle">Seguridad</h5>
            </div>
            <div className="card scale-105">
              <img className="cardImg" src="/img/server.svg" alt="" />
              <h5 className="cardTitle">Servidores</h5>
            </div>
            <div className="card scale-105">
              <img className="cardImg" src="/img/team.svg" alt="" />
              <h5 className="cardTitle">Servicio personalizado</h5>
            </div>

            <div className="linkDiv">
              <Link className="serviceLink" to="/us">
                Descubre
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
