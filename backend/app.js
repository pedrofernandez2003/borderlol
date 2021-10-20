let express = require('express');

let app = express();

app.use(express.json());

app.get('/salas', async (req, res) => { // esto deberia conseguir las salas y enviar la lista de ellas en un json con el formato q tiene dentro
  res.json({
    evento: "listaSalas",
    data: [
      {creador:"Usuario1", puntos:4321, rango:"B"},
      {creador:"Usuario2", puntos:321, rango:"D"},
      {creador:"Usuario3", puntos:10023, rango:"S"}
    ]
  });
});

app.get("/usuario/:nickname", async (req, res) => {
  res.json({
    evento: "dataUsuario",
    data: {
      nickname: req.params.nickname,
      fotoPerfil: "https://cdn.discordapp.com/attachments/480391685680005121/886014226194374766/unknown.png",
      puntos: 4444,
      rango: "B"
    }
  });
});

module.exports = app;
