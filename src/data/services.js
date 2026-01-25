// src/data/services.js

import alba from "../assets/alba.jpg";
import elec from "../assets/electrico.jpg";
import gas from "../assets/gasfiteria.jpg";
import jard from "../assets/jardineria.jpg";
import limp from "../assets/Limpieza.jpg";
import pase from "../assets/paseador.jpg";

export const services = [
  {
    id: 1,
    titulo: "Servicio de Albañilería",
    categoria: "Albañilería",
    imagen: alba,
    fechaCreacion: "2025-01-10",
    precio: 35000,
    descripcion: "Trabajos de construcción, remodelación y reparaciones en albañilería.",
  },
  {
    id: 2,
    titulo: "Servicio Eléctrico",
    categoria: "Electricidad",
    imagen: elec,
    fechaCreacion: "2025-01-12",
    precio: 30000,
    descripcion: "Instalaciones eléctricas, enchufes, iluminación y reparaciones certificadas.",
  },
  {
    id: 3,
    titulo: "Servicio de Gasfitería",
    categoria: "Gasfitería",
    imagen: gas,
    fechaCreacion: "2025-01-15",
    precio: 28000,
    descripcion: "Reparación de fugas, grifería, cañerías y calefont.",
  },
  {
    id: 4,
    titulo: "Servicio de Jardinería",
    categoria: "Jardinería",
    imagen: jard,
    fechaCreacion: "2025-01-18",
    precio: 20000,
    descripcion: "Mantención de jardines, poda de árboles y diseño de áreas verdes.",
  },
  {
    id: 5,
    titulo: "Servicio de Limpieza",
    categoria: "Limpieza",
    imagen: limp,
    fechaCreacion: "2025-01-20",
    precio: 18000,
    descripcion: "Limpieza profunda de casas, departamentos y oficinas.",
  },
  {
    id: 6,
    titulo: "Paseador de Mascotas",
    categoria: "Mascotas",
    imagen: pase,
    fechaCreacion: "2025-01-22",
    precio: 12000,
    descripcion: "Paseos diarios para perros con cuidado y responsabilidad.",
  },
];
