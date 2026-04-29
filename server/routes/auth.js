const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const db = require("../BasedeDatos/db");

router.post("/login", async (req, res) => {

  const { email } = req.body;

  try {

    const [rows] = await db.query(
      "SELECT * FROM usuarios WHERE email = ?",
      [email]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "Usuario no existe" });
    }

    const user = rows[0];

    const token = jwt.sign(
      {
        id: user.id,
        nombre: user.nombre,
        email: user.email
      },
      "ticketmaster_secret",
      { expiresIn: "8h" }
    );

    res.json({
      token,
      user
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error servidor" });
  }

});

module.exports = router;