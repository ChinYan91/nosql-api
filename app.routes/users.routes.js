const express = require('express');
const router = express.Router();
const { validateRegistration, validateLogin, validateChangePassword } = require('../app.middlewares/user.validator');
const { auth } = require('../app.middlewares/auth');

const UserController = require("../app.controllers/user.controller");

/* GET users listing. */
router.get('/', (req, res, next) => { res.send('respond with a resource'); });

router.post('/register', validateRegistration, (req, res, next) => { UserController.registration(req, res); }); //create
router.post('/login', validateLogin, (req, res, next) => { UserController.login(req, res) });
router.get('/profile', auth, (req, res, next) => {}); //read
router.put('/updatePassword', auth, validateChangePassword, (req, res, next) => { UserController.update(req, res) }); //update



module.exports = router;