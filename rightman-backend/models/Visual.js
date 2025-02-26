const mongoose = require('mongoose');

const visualSchema = new mongoose.Schema({
  nom: String,
  createur: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  id_projet: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
  auteur: String,
  vignette: String,
  etat: String,
  categorie: String,
  cout: Number,
  notes: String,
  cote: String,
  provenance: String,
  numero_expo: String,
  credit: String,
  legende: String,
  periode: String,
  url: String,
  rubrique: String,
  ayant_droit: { type: mongoose.Schema.Types.ObjectId, ref: 'RightsHolder' },
  supports_autorises: [String],
  duree: Number
});

module.exports = mongoose.model('Visual', visualSchema);
