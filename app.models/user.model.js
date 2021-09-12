const { generateToken } = require("../util/crypto");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    token: {
        type: String
    }
}, { timestamps: true });

const User = mongoose.model("Users", userSchema);

class UserModel {
    static register(data, res) {
        let user = new User(data);
        user.save().then(result => {
            res.status(200).json({ error: 0, data: result, result: "data inserted" });
        }).catch(error => {
            res.status(500).json({ error: 1, data: error, result: "data insert failed" })
        })
    }

    static login(data, res) {
        User.findOne(data).then(result => {
            let token = generateToken(result._id, data.password);
            var output = { result, ... { token } };
            console.log(data);
            console.log("token : ", token);
            this.setToken({ _id: result._id }, { token }, res, output);
        }).catch(error => {
            res.status(500).json({ error: 1, data: error, result: "login denied" })
        });
    }

    static update(identifier, data, res) {
        User.updateOne(identifier, data).then(result => {
            res.status(200).json({ error: 0, data: result, result: "data updated" })
        }).catch(error => {
            res.status(500).json({ error: 1, data: error, result: "login failed" })
        });
    }

    static setToken(identifier, updates, res, data) {
        User.updateOne(identifier, updates).then(result => {
            res.status(200).json({ error: 0, data: data, result: "login successfully" })
        }).catch(error => {
            res.status(500).json({ error: 1, data: error, result: "create token failed" })
        });
    }

    static profile(_id, res) {
        User.findOne(_id).then(result => {
            res.status(200).json({ error: 0, data: result, result: "profile data retrieved" })
        }).catch(error => {
            res.status(500).json({ error: 1, data: error, result: "profile data retrieve failed" })
        });
    }

    static Auth(data, callback) {
        User.findOne(data).then(result => {
            callback();
        }).catch(error => {
            res.status(401).json({ error: 1, data: error, result: "Unauthorized" })
        });
    }

    static delete(data, res) {
        User.deleteOne(data, res).then(
            result => res.status(200).json({ error: 0, data: result, result: "Pet deleted" })
        ).catch(
            error => res.status(500).json({ error: 1, data: error, result: "Pet deletes failed" })
        );
    }

}

module.exports = UserModel;