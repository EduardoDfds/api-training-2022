"user strict";

const Mongoose = require("mongoose");
const Usuario = Mongoose.model('Usuario');

module.exports = class UserService {

    static async buscarPorId(idUsuario){
        try{
            return await Usuario.findById(idUsuario);
        }catch(e){
            throw new Error(`UsuarioService.buscarPorId ${e}`)
        }
    }
    
    static async buscarTodos(){
        try{
            return await Usuario.find({})
        }catch(e){
            throw new Error(`UsuarioService.bucarTodos ${e}`);
        }
        
    }

    static async salvar(usuario){
        try {
            return await Usuario.create(usuario);
        } catch (e) {
            console.log(e.message)
            throw new Error(`UsuarioService.salvar ${e}`);
        }
    }

    static async atualizar(usuario){
        try {
            return await Usuario.findOneAndUpdate(usuario._id, usuario);
        } catch (e) {
            throw new Error(`UsuarioService.atualizar ${e}`);
        }
    }

    static async excluir (usuario){
        try {
            if (!usuario._id) {
                throw new Error(`A identificação do usuario deve ser informada`);
            }
            return await Usuario.findOneAndDelete({_id: usuario._id});
        } catch (e) {
            throw new Error(`UsuarioService.excluir ${e}`);
        }
    }
}