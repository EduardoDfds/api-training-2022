const UserController = require("../controller/UserController")

module.exports = class UserRoute {
    constructor(app) {
        app.route("/user").get(UserController.getUsers);
        app.route("/user").post(UserController.save);
    }
}