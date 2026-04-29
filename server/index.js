const express = require("express");
const cors = require("cors");

const boletosRoutes = require("./routes/boleto");
const authRoutes = require("./routes/auth");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", boletosRoutes);


app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});