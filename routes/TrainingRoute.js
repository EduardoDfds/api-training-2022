const TrainingController = require("../controller/TrainingController")

module.exports = class TrainingRoute {
    constructor(app) {
        app.route("/user").get(TrainingController.getUsers);
        app.route("/user").post(TrainingController.save);
    }
}