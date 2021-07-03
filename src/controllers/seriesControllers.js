const app = require("../app");
const series = require("../models/series.json"); // importando meu arquivo json dos filmes (que nesse projeto são meus dados)

// definir uma rota padrao
const home = (request, response) => {
    response.status(200).send("Olá, pessoa, seja muito bem vinde ao {reprograma}flix! 🧡");
        };

const getAll = (request, response) => {
            response.status(200).send(series);
        };

const getById = (request, response) => {
    // id solicitado na request
    const idRequerido = request.params.id;
    // find((elemento)) => elemento + logica)
    const idFiltrado = series.find(serie => serie.id ==idRequerido)
    response.status(200).send(idFiltrado)
};

const getByTitle = (request, response) => {
    // acessando titulo solicitado na request
    const requestedTitle = request.query.title.toLowerCase();

    // enviar uma resposta p minha requisição
    const filteredTitle = series.find(serie => serie.title.toLowerCase().includes(requestedTitle));
    console.log(filteredTitle);

    // add uma condicao p retornar o titulo
    if (filteredTitle === "" || filteredTitle === undefined) {
        response.status(404).send(
            ("Por favor, insira um título válido.")
        );
    } else {
        response.status(200).send(filteredTitle)
};

};

module.exports = {
    home,
    getAll,
    getByTitle,
    getById
}