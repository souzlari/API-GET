const controller = require("../controllers/seriesControllers");
// importei arquivo controllers

const express = require("express"); // importar express
const router = express.Router(); // instanciar router

router.get("/", controller.home);
router.get("/series/todas", controller.getAll);
router.get("/series/titulo", controller.getByTitle);
router.get("/series/:id", controller.getById);

module.exports = router // exportando router