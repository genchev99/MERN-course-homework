const mongoose = require('mongoose');
const recipeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectID,
    ref: 'users',
  },
  name: {
    type: String,
    maxlength: 80,
  },
  shortDescription: {
    type: String,
    maxlength: 256,
  },
  prepTime: {
    type: Number,
    default: 0,
  },
  products: {
    type: mongoose.Schema.Types.Array,
    default: [],
  },
  resultImage: {
    type: String,
    required: true,
  },
  inDepthDescription: {
    type: String,
    maxlength: 2048,
  },
  tags: {
    type: mongoose.Schema.Types.Array,
    default: [],
  },
}, {
  timestamps: true,
});

const collectionName = 'recipes';
const recipeModel = mongoose.model(collectionName, recipeSchema);

module.exports = recipeModel;