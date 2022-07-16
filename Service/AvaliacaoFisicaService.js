var avaliacoes = [];
module.exports = class AvaliacaoFisicaService {
    static getAvaliacoes() {
        return { avaliacoes: avaliacoes }
    }
    static saveAvaliacao(avaliacao) {
        avaliacoes.push(avaliacao)
        return { avaliacao: avaliacao }
    }

}