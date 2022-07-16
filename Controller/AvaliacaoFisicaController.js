const AvaliacaoFisicaService = require("../service/AvaliacaoFisicaService")


module.exports = class AvaliacaoFisicaController {
    static async getAvaliacoes(req, res) {
        res.status(200).send(AvaliacaoFisicaService.getAvaliacoes())
    }

    static async saveAvaliacao(req, res) {
        res.status(200).send(AvaliacaoFisicaService.saveAvaliacao(req.body))
    }
}