"use strict";
const MedidaService = require("../service/MedidaService")


module.exports = class MedidaController {
    
    static async buscarPorId(req, res){
        try {
            res.status(200).send(await MedidaService.buscarPorId(req.params.idMedida));
        } catch (e) {
            res.status(500).send(e.menssage);
            console.error(`MedidaController.buscarPorId ${e.menssage}`)
        }
    }

    static async buscarTodos(req, res){
        try {
            res.status(200).send(await MedidaService.buscarTodos());
        } catch (e) {
            res.status(500).send(e.menssage);
            console.error(`MedidaController.buscarTodos ${e.menssage}`)
        }
    }

    static async salvar(req, res){
        try {
            res.status(200).send(await MedidaService.salvar(req.body));
        } catch (e) {
            res.status(500).send(e.menssage);
            console.error(`MedidaController.salvar${e.menssage}`);
        }
    }

    static async excluir(req, res){
        try {
            res.status(200).send(await MedidaService.excluir(req.body));
        } catch (e) {
            res.status(500).send(e.menssage);
            console.error(`MedidaController.excluir ${e.menssage}`);
        }
    }

    static async atualizar(req, res){
        try {
            res.status(200).send(await MedidaService.atualizar(req.body));
        } catch (e) {
            res.status(500).send(e.menssage);
            console.error(`MedidaController.atualizar ${e.menssage}`)
        }
    }
}