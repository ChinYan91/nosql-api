const express = require('express');
const router = express.Router();
const PetController = require("../app.controllers/pet.controller");
const { validateCreatePet, validatePetID, validateUpdatePet } = require("../app.middlewares/pet.validator");
const { auth } = require("../app.middlewares/auth");

/* GET home page. */
router.post('/create', auth, validateCreatePet, (req, res, next) => { PetController.create(req, res) });
router.get('/getAll', auth, validatePetID, (req, res, next) => { PetController.getAll(req, res); });
router.put('/update', auth, validateUpdatePet, (req, res, next) => { PetController.update(req, res) });
router.delete('/delete', auth, validatePetID, (req, res, next) => { PetController.delete(req, res) });

module.exports = router;