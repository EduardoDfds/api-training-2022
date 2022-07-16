const ExercicioService = require("../service/ExercicioService")


module.exports = class ExercicioContoller {
    static async getExercicios(req, res) {
        res.status(200).send(ExercicioService.getExercicios())
    }

    static async saveExercicio(req, res) {
        res.status(200).send(ExercicioService.saveExercicio(req.body))
    }
}