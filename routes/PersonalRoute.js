const PersonalController = require("../controller/PersonalController.js")

module.exports = class PersonalRoute {
    constructor(app) {
        app.route("/personal").get(PersonalController.getPersonals);
        app.route("/personal").post(PersonalController.savePersonal);
    }
}