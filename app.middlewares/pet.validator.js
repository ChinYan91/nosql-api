const Joi = require("joi");

const validateCreatePet = (req, res, next) => {
    let data = req.body;

    let createPetSchema = Joi.object().keys({
        name: Joi.string().required(),
        type: Joi.string().required(),
        userID: Joi.string().required(),
    });

    let { error, value } = createPetSchema.validate(data);

    if (error) {
        console.error(error.details);
        res.status(200).json({ error: 1, "detail": error.details })
    } else {
        next();
    }
}

const validatePetID = (req, res, next) => {
    let data = (req.body) ? req.body : req.query;

    let deletePetSchema = Joi.object().keys({
        petID: Joi.string().required(),
    });

    let { error, value } = deletePetSchema.validate(data);

    if (error) {
        console.error(error.details);
        res.status(200).json({ error: 1, "detail": error.details })
    } else {
        next();
    }
}

const validateUpdatePet = (req, res, next) => {
    let data = req.body;

    let updatePetSchema = Joi.object().keys({
        name: Joi.string().required(),
        type: Joi.string().required(),
    });

    let { error, value } = updatePetSchema.validate(data);

    if (error) {
        console.error(error.details);
        res.status(200).json({ error: 1, "detail": error.details })
    } else {
        next();
    }
}

module.exports = { validateCreatePet, validatePetID, validateUpdatePet }