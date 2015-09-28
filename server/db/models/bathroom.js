var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    longitude: Number,
    latitude: Number
  },
  type: String,
  handicapped: String
});


mongoose.model('Bathroom', schema);
