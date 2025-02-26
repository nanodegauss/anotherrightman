const express = require('express');
const router = express.Router();
const Negotiation = require('../models/Negotiation');

// Créer une nouvelle négociation
router.post('/', async (req, res) => {
  const negotiation = new Negotiation(req.body);
  await negotiation.save();
  res.status(201).send(negotiation);
});

// Obtenir toutes les négociations
router.get('/', async (req, res) => {
  const negotiations = await Negotiation.find();
  res.status(200).send(negotiations);
});

// Ajouter les routes pour get, put, delete

module.exports = router;
