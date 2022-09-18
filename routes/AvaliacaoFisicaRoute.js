const AvaliacaoFisicaController = require("../controller/AvaliacaoFisicaController.js")

module.exports = class AvaliacaoFisicaRoute {
    constructor(app) {
        app.route("/avaliacoes")
            .get(AvaliacaoFisicaController.buscarTodos)
            .post(AvaliacaoFisicaController.salvar)
            .put(AvaliacaoFisicaController.atualizar)
            .delete(AvaliacaoFisicaController.excluir);

        app.route("/avaliacoes/:idAvaliacao").get(AvaliacaoFisicaController.buscarPorId);
    }
}