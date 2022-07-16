const PersonalService = require("../service/PersonalService")


module.exports = class PersonalController {
    static async getPersonals(req, res) {
        res.status(200).send(PersonalService.getPersonals())
    }

    static async savePersonal(req, res) {
        res.status(200).send(PersonalService.savePersonalve(req.body))
    }
}