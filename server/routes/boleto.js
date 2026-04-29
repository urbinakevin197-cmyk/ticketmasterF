const express = require("express");
const router = express.Router();
const db = require("../BasedeDatos/db");
const authenticateToken = require("../Middlewares/verifyToken");

router.post("/aceptar-boleto/:id", authenticateToken, async (req, res) => {
  const userId = req.user.id;
  const { id } = req.params;

  try {
    // 1. traer de transferenciasB
    const [rows] = await db.query(
      "SELECT * FROM transferenciasB WHERE id = ? AND usuario_recibe_id = ?",
      [id, userId]
    );

    const t = rows[0];

    if (!t) {
      return res.status(404).json({ error: "No existe o no es tuyo" });
    }

    // 2. insertar en boletos
    await db.query(
      `INSERT INTO boletos 
      (usuario_id, nombre_evento, fecha_evento, lugar, ciudad, imagen, orden_id, estado, imagen_b, seccion, fila, asiento)
      VALUES (?, ?, ?, ?, ?, ?, ?, 'aceptado', ?, ?, ?, ?)`,
      [
        userId,
        t.nombre_evento,
        t.fecha_evento,
        t.lugar,
        t.ciudad,
        t.imagen,
        t.orden_id,
        t.imagen_b,
        t.seccion,
        t.fila,
        t.asiento,
      ]
    );

    // 3. actualizar transferencia (opcional pero PRO)
    await db.query(
      "UPDATE transferenciasB SET estado = 'aceptado' WHERE id = ?",
      [id]
    );

    res.json({ ok: true });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al aceptar boleto" });
  }
});

router.get("/mis-boletos", authenticateToken, async (req, res) => {
  const userId = req.user.id;

  try {
    const [rows] = await db.query(
      "SELECT * FROM boletos WHERE usuario_id = ? AND estado = 'aceptado'",
      [userId]
    );

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener boletos" });
  }
});

router.get("/mis-transferencias", authenticateToken, async (req, res) => {
  const userId = req.user.id;

  try {
    const [rows] = await db.query(`
      SELECT 
        t.*,
        u.n_usuario AS nombre_emisor
      FROM transferenciasB t
      JOIN usuarios u ON t.usuario_envia_id = u.id
      WHERE t.usuario_recibe_id = ?
      AND t.estado = 'pendiente'
    `, [userId]);

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener transferencias" });
  }
});

// GET boleto por ID NO SE SABE SI SE VA A USAR, PERO POR SI ACASO
router.get("/boletos/:id", authenticateToken, async (req, res) => {
  const { id } = req.params;

  //console.log("🟡 ID PARAM:", id);
  //console.log("🟡 HEADERS AUTH:", req.headers.authorization);

  try {
    //console.log("🟡 REQ.USER:", req.user);

    if (!req.user) {
      //console.log("❌ req.user es undefined");
      return res.status(401).json({ msg: "No autorizado (sin user)" });
    }

    if (!req.user.id) {
      //console.log("❌ req.user.id no existe:", req.user);
      return res.status(400).json({ msg: "User sin id en token" });
    }

    const [rows] = await db.query(
      "SELECT * FROM boletos WHERE id = ? AND usuario_id = ?",
      [id, req.user.id]
    );

    //console.log("🟢 RESULTADO QUERY:", rows);

    if (rows.length === 0) {
      //console.log("❌ No encontró boleto con ese id y usuario");
      return res.status(404).json({ msg: "Boleto no encontrado" });
    }

    //console.log("✅ BOLETO ENCONTRADO:", rows[0]);

    res.json(rows[0]);
  } catch (error) {
    console.log("🔥 ERROR BACKEND:", error);
    res.status(500).json({ msg: "Error del servidor" });
  }
});


module.exports = router;