"user strict";

const Mongoose = require("mongoose");
const Aluno = Mongoose.model("Aluno");

module.exports = class AlunoService {

    static async buscarPorId(idAluno){
        try{
            return await Aluno.findById(idAluno);
        }catch(e){
            throw new Error(`AlunoService.buscarPorId ${e}`)
        }
    }
    
    static async buscarTodos(){
        try{
            return await Aluno.find({})
        }catch(e){
            throw new Error(`AlunoService.bucarTodos ${e}`);
        }
        
    }

    static async salvar(aluno){
        try {
            return await Aluno.create(aluno);
        } catch (e) {
            throw new Error(`AlunoService.salvar ${e}`);
        }
    }

    static async atualizar(aluno){
        try {
            return await Usuario.findOneAndUpdate(aluno._id, aluno);
        } catch (e) {
            throw new Error(`AlunoService.atualizar ${e}`);
        }
    }

    static async excluir (aluno){
        try {
            if (!aluno._id) {
                throw new Error(`A identificação do aluno deve ser informada`);
            }
            return await Aluno.findOneAndDelete({_id: aluno._id});
        } catch (e) {
            throw new Error(`AlunoService.excluir ${e}`);
        }
    }
}