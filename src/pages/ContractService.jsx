import { useParams } from "react-router-dom";
import { useState } from "react";
import { services } from "../data/services";

const ContractService = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === Number(id));

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      ...form,
      serviceId: service.id,
    };

    console.log("Contrato enviado:", data);

    alert("Solicitud enviada (simulada)");
  };

  return (
    <div className="container my-5">
      <h2>Contratar: {service.titulo}</h2>

      <form onSubmit={handleSubmit} className="mt-4">
        <input
          className="form-control mb-3"
          placeholder="Nombre completo"
          name="nombre"
          onChange={handleChange}
          required
        />

        <input
          className="form-control mb-3"
          placeholder="Email"
          name="email"
          type="email"
          onChange={handleChange}
          required
        />

        <input
          className="form-control mb-3"
          placeholder="Teléfono"
          name="telefono"
          onChange={handleChange}
          required
        />

        <textarea
          className="form-control mb-3"
          placeholder="Mensaje o detalles del servicio"
          name="mensaje"
          rows="4"
          onChange={handleChange}
        />

        <button className="btn btn-success w-100">
          Enviar solicitud
        </button>
      </form>
    </div>
  );
};

export default ContractService;
