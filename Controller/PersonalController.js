const PersonalService = require("../service/PersonalService")


module.exports = class PersonalController {
    static async getPersonals(req, res) {
        res.status(200).send(PersonalService.getUsers())
    }

    static async savePersonal(req, res) {
        res.status(200).send(PersonalService.save(req.body))
    }
}