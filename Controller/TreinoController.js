"use srtict";
const TreinoService = require("../service/TreinoService")


module.exports = class TreinoController {
    
    static async buscarPorId(req, res){
        try {
            res.status(200).send(await TreinoService.buscarPorId(req.params.idUsuario));
        } catch (e) {
            res.status(500).send(e.menssage);
            console.error(`TreinoController.buscarPorId ${e.menssage}`)
        }
    }

    static async buscarTodos(req, res){
        try {
            res.status(200).send(await TreinoService.buscarTodos());
        } catch (e) {
            res.status(500).send(e.menssage);
            console.error(`TreinoController.buscarTodos ${e.menssage}`)
        }
    }

    static async salvar(req, res){
        try {
            res.status(200).send(await TreinoService.salvar(req.body));
        } catch (e) {
            res.status(500).send(e.menssage);
            console.error(`TreinoController.salvar${e.menssage}`);
        }
    }

    static async excluir(req, res){
        try {
            res.status(200).send(await TreinoService.excluir(req.body));
        } catch (e) {
            res.status(500).send(e.menssage);
            console.error(`TreinoController.excluir ${e.menssage}`);
        }
    }

    static async atualizar(req, res){
        try {
            res.status(200).send(await TreinoService.atualizar(req.body));
        } catch (e) {
            res.status(500).send(e.menssage);
            console.error(`TreinoController.atualizar ${e.menssage}`)
        }
    }
}