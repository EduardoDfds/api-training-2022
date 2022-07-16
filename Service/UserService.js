var users = [];
module.exports = class UserService {
    static getUsers() {
        return { users: users }
    }
    static saveUser(user) {
        users.push(user)
        return { user: user }
    }

}