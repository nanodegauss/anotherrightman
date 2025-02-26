const mongoose = require('mongoose');

const rightsHolderSchema = new mongoose.Schema({
  nom: String,
  interlocuteur: String,
  email: String,
  tel: String,
  adresse: String,
  remarques: String,
  categorie: String
});

module.exports = mongoose.model('RightsHolder', rightsHolderSchema);
