const { hashPassword } = require("../util/crypto");
const UserModel = require("../app.models/user.model");

class UserController {
    static registration(req, res) {
        let firstname = req.body.firstname,
            lastname = req.body.lastname,
            email = req.body.email,
            password = req.body.password;

        let hashed = hashPassword(password);
        let data = { firstname, lastname, email, password: hashed }
        UserModel.register(data, res);
    }

    static login(req, res) {
        let email = req.body.email,
            password = req.body.password;

        let hashed = hashPassword(password);
        let data = { email, password: hashed }
        UserModel.login(data, res);
    }

    static changePassword(req, res) {
        let firstname = req.body.firstname,
            lastname = req.body.lastname,
            email = req.body.email,
            password = req.body.password;

        let hashed = hashPassword(password);
        let data = { firstname, lastname, email, password: hashed }
        UserModel.update(data, res);
    }

}

module.exports = UserController;