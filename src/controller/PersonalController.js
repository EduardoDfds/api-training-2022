"use strict";
const PersonalService = require("../service/PersonalService")

module.exports = class PersonalController {

    static async buscarPorId(req, res){
        try {
            res.status(200).send(await PersonalService.buscarPorId(req.params.idUsuario));
        } catch (e) {
            res.status(500).send(e.menssage);
            console.error(`PersonalController.buscarPorId ${e.menssage}`)
        }
    }

    static async buscarTodos(req, res){
        try {
            res.status(200).send(await PersonalService.buscarTodos());
        } catch (e) {
            res.status(500).send(e.menssage);
            console.error(`PersonalController.buscarTodos ${e.menssage}`)
        }
    }

    static async salvar(req, res){
        try {
            res.status(200).send(await PersonalService.salvar(req.body));
        } catch (e) {
            res.status(500).send(e.menssage);
            console.error(`PersonalController.salvar${e.menssage}`);
        }
    }

    static async excluir(req, res){
        try {
            res.status(200).send(await PersonalService.excluir(req.body));
        } catch (e) {
            res.status(500).send(e.menssage);
            console.error(`PersonalController.excluir ${e.menssage}`);
        }
    }

    static async atualizar(req, res){
        try {
            res.status(200).send(await PersonalService.atualizar(req.body));
        } catch (e) {
            res.status(500).send(e.menssage);
            console.error(`PersonalController.atualizar ${e.menssage}`)
        }
    }
}