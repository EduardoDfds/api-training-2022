
const UserService = require("../service/UserService")


module.exports = class UserController {
    static async getUsers(req, res) {
        res.status(200).send(UserService.getUsers())
    }

    static async saveUser(req, res) {
        res.status(200).send(UserService.saveUser(req.body))
    }
}