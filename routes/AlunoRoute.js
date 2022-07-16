const AlunoController = require("../controller/AlunoController.js")

module.exports = class AlunoRoute {
    constructor(app) {
        app.route("/aluno").get(AlunoController.getAlunos);
        app.route("/aluno").post(AlunoController.saveAluno);
    }
}