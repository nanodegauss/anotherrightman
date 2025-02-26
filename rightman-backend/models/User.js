const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nom: String,
  email: String,
  mot_de_passe: String,
  role: String,
  projets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
  visuels: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Visual' }],
  ayants_droit: [{ type: mongoose.Schema.Types.ObjectId, ref: 'RightsHolder' }]
});

module.exports = mongoose.model('User', userSchema);