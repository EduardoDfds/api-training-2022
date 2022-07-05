var personals = [];
module.exports = class PersonalService {
    static getPersonals() {
        return { personals: personals }
    }
    static save(personal) {
        personals.push(personal)
        return { personal: personal }
    }

}