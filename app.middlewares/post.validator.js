const Joi = require("joi");

const validateCreatePost = (req, res, next) => {
    let data = req.body;

    let createPostSchema = Joi.object().keys({
        title: Joi.string().required(),
        body: Joi.string().required(),
        userID: Joi.string().required(),
    });

    let { error, value } = createPostSchema.validate(data);

    if (error) {
        console.error(error.details);
        res.status(200).json({ error: 1, "detail": error.details })
    } else {
        next();
    }
}

const validatePostID = (req, res, next) => {
    let data = (req.body) ? req.body : req.query;

    let deletePostSchema = Joi.object().keys({
        postID: Joi.string().required(),
    });

    let { error, value } = deletePostSchema.validate(data);

    if (error) {
        console.error(error.details);
        res.status(200).json({ error: 1, "detail": error.details })
    } else {
        next();
    }
}

const validateUpdatePost = (req, res, next) => {
    let data = req.body;

    let updatePostSchema = Joi.object().keys({
        title: Joi.string().required(),
        body: Joi.string().required(),
    });

    let { error, value } = updatePostSchema.validate(data);

    if (error) {
        console.error(error.details);
        res.status(200).json({ error: 1, "detail": error.details })
    } else {
        next();
    }
}

module.exports = { validateCreatePost, validatePostID, validateUpdatePost }