const controller = require("../controllers/moviesControllers");
// importei arquivo controllers

const express = require("express"); // importar express
const router = express.Router(); // instanciar router

router.get("/", controller.home);
router.get("/filmes/todos", controller.getAll);
router.get("/filmes/titulo", controller.getByTitle);
router.get("/filmes/:id", controller.getById);

module.exports = router // exportando router