const ExercicioContoller = require("../controller/ExercicioContoller.js")

module.exports = class ExercicioRoute {
    constructor(app) {
        app.route("/exercicio").get(ExercicioContoller.getExercicios);
        app.route("/exercicio").post(ExercicioContoller.saveExercicio);
    }
}