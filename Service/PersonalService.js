var personals = [];
module.exports = class PersonalService {
    static getPersonals() {
        return { personals: personals }
    }
    static savePersonal(personal) {
        personals.push(personal)
        return { personal: personal }
    }

}