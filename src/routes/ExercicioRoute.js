const ExercicioContoller = require("../controller/ExercicioContoller.js")

module.exports = class ExercicioRoute {
    constructor(app) {
        app.route("/exercicios")
            .get(ExercicioContoller.buscarTodos)
            .post(ExercicioContoller.salvar)
            .put(ExercicioContoller.atualizar)
            .delete(ExercicioContoller.excluir);

        app.route("/exercicios/:idExercicio").get(ExercicioContoller.buscarPorId);
    }
}