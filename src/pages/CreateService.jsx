import { useState, useContext } from "react";
import { ServicesContext } from "../context/ServicesContext";

function CrearPublicacion() {
  const { addService } = useContext(ServicesContext);

  const [titulo, setTitulo] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoServicio = {
      id: Date.now(),
      title: titulo,
      price: precio,
      description: descripcion,
    };

    addService(nuevoServicio);

    // limpiar formulario
    setTitulo("");
    setPrecio("");
    setDescripcion("");
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Crear publicación</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />

        <input
          type="number"
          className="form-control mb-3"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
        />

        <textarea
          className="form-control mb-3"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        />

        <button className="btn btn-success">Publicar</button>
      </form>
    </div>
  );
}

export default CrearPublicacion;
