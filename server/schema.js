const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const listSchema = new Schema([{
  name: { type: String, required: true },
  photo: { type: String },
  rating: { type: Number },
  coordinates: { type: String, required: true }
}]);

const List = mongoose.model('List', listSchema);

module.exports = { List };