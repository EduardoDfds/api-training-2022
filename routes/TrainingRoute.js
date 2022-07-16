const TrainingController = require("../controller/TrainingController")

module.exports = class TrainingRoute {
    constructor(app) {
        app.route("/training").get(TrainingController.getTrainings);
        app.route("/training").post(TrainingController.saveTraining);
    }
}