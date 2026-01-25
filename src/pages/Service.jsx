import { useParams } from "react-router-dom";
import { services } from "../data/services.js";

const Service = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === Number(id));

  if (!service) {
    return <div className="container mt-5">Servicio no encontrado 😢</div>;
  }

  return (
    <div className="container my-5">
      <h1 className="fw-bold mb-3">{service.titulo}</h1>

      <img
        src={service.imagen}
        alt={service.titulo}
        className="img-fluid rounded mb-4"
        style={{ maxHeight: "400px", objectFit: "cover" }}
      />

      <p className="fs-5 text-muted">{service.descripcion}</p>

      <h3 className="fw-bold text-success mb-3">
        ${service.precio.toLocaleString()}
      </h3>

      <p>
        <strong>Categoría:</strong> {service.categoria}
      </p>

      <p>
        <strong>Publicado:</strong> {service.fechaCreacion}
      </p>

      <button className="btn btn-primary btn-lg mt-3">
        Contratar servicio
      </button>
    </div>
  );
};

export default Service;
