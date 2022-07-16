const AlunoService = require("../service/AlunoService")


module.exports = class AlunoController {
    static async getAlunos(req, res) {
        res.status(200).send(AlunoService.getAlunos())
    }

    static async saveAluno(req, res) {
        res.status(200).send(AlunoService.saveAluno(req.body))
    }
}