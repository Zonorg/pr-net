import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-1 fw-bold">404</h1>
      <p className="fs-3">
        {" "}
        <span className="text-danger">Opps!</span> Página no encontrada
      </p>
      <Link to="/" className="btn btn-primary custom-btn">
        Ir al inicio
      </Link>
    </div>
  );
};

export default Error404;
