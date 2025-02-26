const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  nom: String,
  description: String,
  date_creation: { type: Date, default: Date.now },
  utilisateur: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  id_visuel: { type: mongoose.Schema.Types.ObjectId, ref: 'Visual' }
});

module.exports = mongoose.model('Task', taskSchema);