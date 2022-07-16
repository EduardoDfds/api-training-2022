var exercicios = [];
module.exports = class ExercicioService {
    static getExercicios() {
        return { exercicios: exercicios }
    }
    static saveExercicio(exercicio) {
        exercicios.push(exercicio)
        return { exercicio: exercicio }
    }

}