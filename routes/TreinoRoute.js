const TreinoController = require("../controller/TreinoController")

module.exports = class TreinoRoute {
    constructor(app) {
        constructor(app)
            app.route("/treinos")
                .get(TreinoController.buscarTodos)
                .post(TreinoController.salvar)
                .put(TreinoController.atualizar)
                .delete(TreinoController.excluir);
    
            app.route("/treinos/:idTreino").get(TreinoController.buscarPorId);
        }
}