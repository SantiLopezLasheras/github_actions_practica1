const express = require("express");
const app = express();

// Asignar puerto
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("¡Hola, Express!");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});