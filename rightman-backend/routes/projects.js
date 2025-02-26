const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Créer un nouveau projet
router.post('/', async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.status(201).send(project);
});

// Obtenir tous les projets
router.get('/', async (req, res) => {
  const projects = await Project.find();
  res.status(200).send(projects);
});

// Ajouter les routes pour get, put, delete

module.exports = router;
