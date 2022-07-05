const UserController = require("../Controller/PersonalController.js")

module.exports = class PersonalRoute {
    constructor(app) {
        app.route("/personal").get(UserController.getUsers);
        app.route("/personal").post(UserController.save);
    }
}