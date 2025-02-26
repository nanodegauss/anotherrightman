const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Créer un nouvel utilisateur
router.post('/', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).send(user);
});

// Obtenir tous les utilisateurs
router.get('/', async (req, res) => {
  const users = await User.find();
  res.status(200).send(users);
});

// Ajouter les routes pour get, put, delete

module.exports = router;
