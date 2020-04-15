const mongoose = require('moongoose');

const logSchema = mongoose.Schema({
  method: { type: String, required: true },
  url: { type: String, required: true },
  code: { type: Number, required: true },
  time: { type: String, required: true }
});

module.exports = mongoose.model('Log', logSchema);
