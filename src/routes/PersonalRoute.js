const PersonalController = require("../controller/PersonalController")

module.exports = class PersonalRoute {
    constructor(app) {
        app.route("/personal")
            .get(PersonalController.buscarTodos)
            .post(PersonalController.salvar)
            .put(PersonalController.atualizar)
            .delete(PersonalController.excluir);

        app.route("/personal/:idPersonal").get(PersonalController.buscarPorId);
    }
}