import { useEffect, useContext } from "react";
import Header from "../components/Header";
import CardService from "../components/CardService";
import { ServicesContext } from "../context/ServicesContext";

const Home = () => {
  const { servicesList, getServices } = useContext(ServicesContext);

  useEffect(() => {
    getServices();
  }, []);

  return (
    <>
      <Header />

      <section className="container my-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Servicios destacados</h2>
          <p className="text-muted">
            Encuentra profesionales confiables para tu hogar
          </p>
        </div>

        {servicesList.length === 0 ? (
          <div className="text-center">
            <p>No hay servicios disponibles.</p>
          </div>
        ) : (
          <div className="row justify-content-center">
            {servicesList.slice(0, 6).map((service) => (
              <div
                className="col-sm-12 col-md-6 col-lg-4 mb-4"
                key={service.id}
              >
                <CardService service={service} />
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Home;
