"user strict";

const Mongoose = require("mongoose");

const Medida = Mongoose.model("Medida");

module.exports = class MedidaService {

    static async buscarPorId(idMedida){
        try{
            return await Medida.findById(idMedida);
        }catch(e){
            throw new Error(`MedidaService.buscarPorId ${e}`)
        }
    }
    
    static async buscarTodos(){
        try{
            return await Medida.find({})
        }catch(e){
            throw new Error(`AvaliacaoFisicaService.bucarTodos ${e}`);
        }
        
    }

    static async salvar(medida){
        try {
            return await Medida.create(medida);
        } catch (e) {
            throw new Error(`MedidaFisicaService.salvar ${e}`);
        }
    }

    static async atualizar(medida){
        try {
            return await Medida.findOneAndUpdate(medida._id, medida);
        } catch (e) {
            throw new Error(`MedidaService.atualizar ${e}`);
        }
    }

    static async excluir (medida){
        try {
            if (!medida._id) {
                throw new Error(`A identificação do medida deve ser informada`);
            }
            return await Medida.findOneAndDelete({_id: medida._id});
        } catch (e) {
            throw new Error(`MedidaService.excluir ${e}`);
        }
    }
}