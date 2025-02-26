const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  nom: String,
  budget: Number,
  date_debut: Date,
  date_fin: Date,
  categorie: String,
  etat: String,
  createur: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  descriptif: String
});

module.exports = mongoose.model('Project', projectSchema);