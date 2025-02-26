const express = require('express');
const router = express.Router();
const RightsHolder = require('../models/RightsHolder');

// Créer un nouvel ayant droit
router.post('/', async (req, res) => {
  const rightsHolder = new RightsHolder(req.body);
  await rightsHolder.save();
  res.status(201).send(rightsHolder);
});

// Obtenir tous les ayants droit
router.get('/', async (req, res) => {
  const rightsHolders = await RightsHolder.find();
  res.status(200).send(rightsHolders);
});

// Ajouter les routes pour get, put, delete

module.exports = router;
