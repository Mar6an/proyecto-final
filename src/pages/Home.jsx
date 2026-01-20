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

      <section className="container-fluid my-5 px-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Servicios destacados</h2>
          <p className="text-muted">
            Encuentra profesionales confiables para tu hogar
          </p>
        </div>

        <div className="row g-4">
          {servicesList.map((service) => (
            <div
              key={service.id}
              className="col-12 col-md-6 col-lg-4"
            >
              <CardService service={service} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
