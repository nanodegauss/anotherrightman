const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Créer une nouvelle tâche
router.post('/', async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.status(201).send(task);
});

// Obtenir toutes les tâches
router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.status(200).send(tasks);
});

// Ajouter les routes pour get, put, delete

module.exports = router;