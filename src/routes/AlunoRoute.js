const AlunoController = require("../controller/AlunoController.js")

module.exports = class AlunoRoute {
    
    constructor(app) {
        constructor(app)
            app.route("/alunos")
                .get(AlunoController.buscarTodos)
                .post(AlunoController.salvar)
                .put(AlunoController.atualizar)
                .delete(AlunoController.excluir);
    
            app.route("/alunos/:idAluno").get(AlunoController.buscarPorId);
        }
}