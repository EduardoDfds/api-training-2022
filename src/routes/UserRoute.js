const UserController = require("../controller/UserController")

module.exports = class UserRoute {
    constructor(app) {
        app.route("/usuarios")
            .get(UserController.buscarTodos)
            .post(UserController.salvar)
            .put(UserController.atualizar)
            .delete(UserController.excluir);

        app.route("/usuarios/:idUsuario").get(UserController.buscarPorId);
    }
}