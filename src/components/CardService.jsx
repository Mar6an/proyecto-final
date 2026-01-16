const CardService = ({ service }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={service.image || "https://via.placeholder.com/300x200"}
        className="card-img-top"
        alt={service.title}
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{service.title}</h5>
        <p className="card-text text-muted">
          {service.description?.slice(0, 80)}...
        </p>

        <div className="mt-auto">
          <p className="fw-bold mb-2">${service.price}</p>
          <button className="btn btn-outline-primary w-100">
            Ver detalle
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardService;
