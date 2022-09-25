"use strict";
const AlunoService = require("../service/AlunoService")


module.exports = class AlunoController {

    static async buscarPorId(req, res){
        try {
            res.status(200).send(await AlunoService.buscarPorId(req.params.idAluno));
        } catch (e) {
            res.status(500).send(e.menssage);
            console.error(`AlunoController.buscarPorId ${e.menssage}`)
        }
    }

    static async buscarTodos(req, res){
        try {
            res.status(200).send(await AlunoService.buscarTodos());
        } catch (e) {
            res.status(500).send(e.menssage);
            console.error(`AlunoController.buscarTodos ${e.menssage}`)
        }
    }

    static async salvar(req, res){
        try {
            res.status(200).send(await AlunoService.salvar(req.body));
        } catch (e) {
            res.status(500).send(e.menssage);
            console.error(`AlunoController.salvar${e.menssage}`);
        }
    }

    static async excluir(req, res){
        try {
            res.status(200).send(await AlunoService.excluir(req.body));
        } catch (e) {
            res.status(500).send(e.menssage);
            console.error(`AlunoController.excluir ${e.menssage}`);
        }
    }

    static async atualizar(req, res){
        try {
            res.status(200).send(await AlunoService.atualizar(req.body));
        } catch (e) {
            res.status(500).send(e.menssage);
            console.error(`AlunoController.atualizar ${e.menssage}`)
        }
    }
}