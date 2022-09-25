"use strict";
const ExercicioService = require("../service/ExercicioService")

module.exports = class ExercicioContoller {
    
    static async buscarPorId(req, res){
        try {
            res.status(200).send(await ExercicioService.buscarPorId(req.params.idExercicio));
        } catch (e) {
            res.status(500).send(e.menssage);
            console.error(`ExercicioContoller.buscarPorId ${e.menssage}`)
        }
    }

    static async buscarTodos(req, res){
        try {
            res.status(200).send(await ExercicioService.buscarTodos());
        } catch (e) {
            res.status(500).send(e.menssage);
            console.error(`ExercicioContoller.buscarTodos ${e.menssage}`)
        }
    }

    static async salvar(req, res){
        try {
            res.status(200).send(await ExercicioService.salvar(req.body));
        } catch (e) {
            res.status(500).send(e.menssage);
            console.error(`ExercicioContoller.salvar${e.menssage}`);
        }
    }

    static async excluir(req, res){
        try {
            res.status(200).send(await ExercicioService.excluir(req.body));
        } catch (e) {
            res.status(500).send(e.menssage);
            console.error(`ExercicioContoller.excluir ${e.menssage}`);
        }
    }

    static async atualizar(req, res){
        try {
            res.status(200).send(await ExercicioService.atualizar(req.body));
        } catch (e) {
            res.status(500).send(e.menssage);
            console.error(`ExercicioContoller.atualizar ${e.menssage}`)
        }
    }
}