const TrainingService = require("../service/TrainingService")


module.exports = class TrainingService {
    static async getTrainings(req, res) {
        res.status(200).send(TrainingService.getUsers())
    }

    static async saveTraining(req, res) {
        res.status(200).send(TrainingService.save(req.body))
    }
}