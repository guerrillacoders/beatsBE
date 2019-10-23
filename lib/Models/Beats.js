const mongoose = require('mongoose');

const beatsSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  sound: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Beats', beatsSchema);

