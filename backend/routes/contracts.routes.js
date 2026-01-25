import express from "express";
import { pool } from "../db.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

// Crear contrato
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { service_id } = req.body;
    const user_id = req.user.id;

    const result = await pool.query(
      "INSERT INTO contracts (user_id, service_id) VALUES ($1, $2) RETURNING *",
      [user_id, service_id]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creando contrato" });
  }
});

// Ver contratos del usuario
router.get("/", authMiddleware, async (req, res) => {
  try {
    const user_id = req.user.id;
    const result = await pool.query(
      "SELECT * FROM contracts WHERE user_id=$1",
      [user_id]
    );

    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo contratos" });
  }
});

export default router;
