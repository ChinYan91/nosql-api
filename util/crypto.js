const crypto = require("crypto");

const generateToken = (userID, password) => {
    let timestamp = new Date();
    let pwd = (userID + " " + password + " " + timestamp)
    let token = crypto.createHash('sha256').update(pwd).digest('base64');
    return token;
}

const hashPassword = (pswd) => {
    return crypto.createHash('sha256').update(pswd).digest('base64');
}

module.exports = { generateToken, hashPassword }