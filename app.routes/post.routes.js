const express = require('express');
const router = express.Router();
const PostController = require("../app.controllers/post.controller");
const { validateCreatePost, validatePostID, validateUpdatePost } = require("../app.middlewares/post.validator");
const { auth } = require("../app.middlewares/auth");

/* GET home page. */
router.post('/create', auth, validateCreatePost, (req, res, next) => { PostController.create(req, res) });
router.get('/getAll', auth, validatePostID, (req, res, next) => { PostController.getAll(req, res); });
router.put('/update', auth, validateUpdatePost, (req, res, next) => { PostController.update(req, res) });
router.delete('/delete', auth, validatePostID, (req, res, next) => { PostController.delete(req, res) });

module.exports = router;