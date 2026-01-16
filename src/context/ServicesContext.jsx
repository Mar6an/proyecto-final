import { createContext, useState } from "react";
import { services } from "../data/services.js";

export const ServicesContext = createContext();

const ServicesProvider = ({ children }) => {
  const [servicesList, setServicesList] = useState([]);

  const getServices = () => {
    setServicesList(services);
  };

  return (
    <ServicesContext.Provider value={{ servicesList, getServices }}>
      {children}
    </ServicesContext.Provider>
  );
};

export default ServicesProvider;
