const express = require("express"); // importando express
const app = express(); // instanciando express p acessar as funcionalidades contidas nele

//chama as rotas
const movies = require("./routes/moviesRoutes");
const series = require("./routes/seriesRoutes");

//definir rota padrao
app.use("/", movies);
app.use('/', series);

module.exports = app