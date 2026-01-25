import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const CardService = ({ service }) => {
  const navigate = useNavigate();

  return (
    <Card className="h-100 shadow-sm border-0">
      <Card.Img
        variant="top"
        src={service.imagen}
        style={{ height: "200px", objectFit: "cover" }}
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold">{service.titulo}</Card.Title>

        <Card.Text className="text-muted">
          {service.descripcion}
        </Card.Text>

        <h5 className="fw-bold text-success mb-3">
          ${service.precio}
        </h5>

        {/* BOTÓN CONTRATAR */}
        <Button
          variant="primary"
          className="w-100 mt-auto"
          onClick={() => navigate(`/contract/${service.id}`)}
        >
          Contratar servicio
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardService;
