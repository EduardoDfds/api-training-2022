"use strict";
const UserService = require("../service/UserService")

module.exports = class UserController {
    
    static async buscarPorId(req, res){
        try {
            res.status(200).send(await UserService.buscarPorId(req.params.idUsuario));
        } catch (e) {
            res.status(500).send(e.menssage);
            console.error(`UsuarioController.buscarPorId ${e.menssage}`)
        }
    }

    static async buscarTodos(req, res){
        try {
            res.status(200).send(await UserService.buscarTodos());
        } catch (e) {
            res.status(500).send(e.menssage);
            console.error(`UsuarioController.buscarTodos ${e.menssage}`)
        }
    }

    static async salvar(req, res){
        try {
            console.log(req.body)
            res.status(200).send(await UserService.salvar(req.body));
        } catch (e) {
            res.status(500).send(e.menssage);
            console.error(`UsuarioController.salvar${e.menssage}`);
        }
    }

    static async excluir(req, res){
        try {
            res.status(200).send(await UserService.excluir(req.body));
        } catch (e) {
            res.status(500).send(e.menssage);
            console.error(`UsuarioController.excluir ${e.menssage}`);
        }
    }

    static async atualizar(req, res){
        try {
            res.status(200).send(await UserService.atualizar(req.body));
        } catch (e) {
            res.status(500).send(e.menssage);
            console.error(`UsuarioController.atualizar ${e.menssage}`)
        }
    }
}