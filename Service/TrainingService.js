var trainings = [];
module.exports = class TrainingService {
    static getTrainings() {
        return { trainings: trainings }
    }
    static saveTraining(training) {
        trainings.push(training)
        return { training: training }
    }

}