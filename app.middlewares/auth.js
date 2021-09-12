const UserModel = require("../app.models/user.model");

const auth = (req, res, next) => {
    let token = req.headers.token;
    UserModel.auth(token, () => { next(); })
}

module.exports = { auth }