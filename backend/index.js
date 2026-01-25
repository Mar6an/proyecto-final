import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import servicesRoutes from "./routes/services.routes.js";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/auth", authRoutes);
app.use("/api/services", servicesRoutes);

// Ruta test (para ver si backend vive)
app.get("/", (req, res) => {
  res.send("🚀 Backend Marketplace funcionando");
});

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});

export default app; // necesario para Jest / Supertest
