const express = require('express');
const router = express.Router();
const Visual = require('../models/Visual');

// Créer un nouveau visuel
router.post('/', async (req, res) => {
  const visual = new Visual(req.body);
  await visual.save();
  res.status(201).send(visual);
});

// Obtenir tous les visuels
router.get('/', async (req, res) => {
  const visuals = await Visual.find();
  res.status(200).send(visuals);
});

// Ajouter les routes pour get, put, delete

module.exports = router;
