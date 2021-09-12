const PetModel = require("../app.models/pet.model");

class PetController {
    create(req, res) {
        PetModel.create(req.body, res);
    }

    getAll(req, res) {
        PetModel.getAll(req.query, res);
    }

    update(req, res) {
        let _id = req.body.petID,
            name = req.body.name,
            type = req.body.type;

        PetModel.update({ _id }, { name, type }, res);
    }

    delete(req, res) {
        PetModel.update(req.body, res);
    }
}

module.exports = PetController;