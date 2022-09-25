const MedidaController = require("../controller/MedidaController.js")

module.exports = class MedidaFisicaRoute {
    constructor(app) {
        app.route("/medidas")
            .get(MedidaController.buscarTodos)
            .post(MedidaController.salvar)
            .put(MedidaController.atualizar)
            .delete(MedidaController.excluir);

        app.route("/medidas/:idMedida").get(MedidaController.buscarPorId);
    }
}