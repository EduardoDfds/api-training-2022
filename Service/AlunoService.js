var alunos = [];
module.exports = class AlunoService {
    static getAlunos() {
        return { alunos: alunos }
    }
    static saveAluno(aluno) {
        alunos.push(aluno)
        return { aluno: aluno }
    }

}