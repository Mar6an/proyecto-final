  import { useEffect, useContext } from "react";
  import Header from "../components/Header";
  /*import CardService from "../components/CardService";*/
  import { ServicesContext } from "../context/ServicesContext";
  
  const Home = () => {
    const { servicesList, getServices } = useContext(ServicesContext);
  
    useEffect(() => {
      getServices();
    }, []);
  
    return (
      <div>
        <Header />
  
        <div className="container mt-4">
          <h2 className="mb-4">Servicios destacados</h2>

          {/*  <div className="row">
            {servicesList.slice(0, 3).map((service) => (
              <div className="col-md-4 mb-4" key={service.id}>
                <CardService service={service} />
              </div> 
            ))}
          </div>
           */}
         
        </div>
      </div>
    );
  };
  
  export default Home;
    