const AvaliacaoFisicaController = require("../controller/AvaliacaoFisicaController.js")

module.exports = class AvaliacaoFisicaRoute {
    constructor(app) {
        app.route("/avaliacaoFisica").get(AvaliacaoFisicaController.getAvaliacaoFisica);
        app.route("/avaliacaoFisica").post(AvaliacaoFisicaController.saveAvaliacaoFisica);
    }
}