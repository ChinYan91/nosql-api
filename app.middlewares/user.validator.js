const Joi = require("joi");

const validateRegistration = (req, res, next) => {
    let data = req.body;

    let registerSchema = Joi.object().keys({
        firstname: Joi.string().required(),
        lastname: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).max(30).required(),
        password_confirmation: Joi.string().valid(Joi.ref('password')).required()
    });

    let { error, value } = registerSchema.validate(data);

    if (error) {
        console.error(error.details);
        res.status(200).json({ error: 1, "detail": error.details })
    } else {
        next();
    }
}

const validateLogin = (req, res, next) => {
    let data = req.body;

    let loginSchema = Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().min(8).max(30).required(),
    });

    let { error, value } = loginSchema.validate(data);

    if (error) {
        console.error(error.details);
        res.status(200).json({ error: 1, "detail": error.details })
    } else {
        next();
    }
}

const validateChangePassword = (req, res, next) => {
    let data = req.body;

    let registerSchema = Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().min(8).max(30).required(),
        password_confirmation: Joi.string().valid(Joi.ref('password')).required()
    });

    let { error, value } = registerSchema.validate(data);

    if (error) {
        console.error(error.details);
        res.status(200).json({ error: 1, "detail": error.details })
    } else {
        next();
    }
}

module.exports = { validateRegistration, validateLogin, validateChangePassword }