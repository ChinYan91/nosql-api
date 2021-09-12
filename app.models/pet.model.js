const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    userID: [{ type: Schema.Types.ObjectId, ref: 'Pets' }],
}, { timestamps: true });

const Pet = mongoose.model("Pets", petSchema);

class PetModel {
    create(data, res) {
        let pet = new Pet(data).then(
            result => res.status(200).json({ error: 0, data: result, result: "pet created" })
        ).catch(
            error => res.status(500).json({ error: 1, data: error, error: "pet created fail" })
        );
    }

    getAll(data, res) {
        Pet.find(data).then(
            result => res.status(200).json({ error: 0, data: result, result: "data retrieved" })
        ).catch(
            error => res.status(500).json({ error: 1, data: error, error: "data retrieves fail" })
        )
    }

    update(filter, data, res) {
        Pet.updateOne(filter, data, res).then(
            result => res.status(200).json({ error: 0, data: result, result: "Pet updated" })
        ).catch(
            error => res.status(500).json({ error: 1, data: error, result: "Pet update failed" })
        );
    }

    delete(data, res) {
        Pet.deleteOne(data, res).then(
            result => res.status(200).json({ error: 0, data: result, result: "Pet deleted" })
        ).catch(
            error => res.status(500).json({ error: 1, data: error, result: "Pet deletes failed" })
        );
    }
}

module.exports = PetModel;