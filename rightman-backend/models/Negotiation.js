const mongoose = require('mongoose');

const negotiationSchema = new mongoose.Schema({
  date: Date,
  note: String,
  utilisateur: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  id_ayant_droit: { type: mongoose.Schema.Types.ObjectId, ref: 'RightsHolder' },
  id_visuel: { type: mongoose.Schema.Types.ObjectId, ref: 'Visual' }
});

module.exports = mongoose.model('Negotiation', negotiationSchema);
