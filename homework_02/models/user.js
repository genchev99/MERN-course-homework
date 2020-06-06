const mongoose = require('mongoose');

/*
парола (поне 8 символа, поне една цифра и знак различен от буква и цифра);
снимка на потребителя (може да бъде Data URL във формат data: [<mediatype></mediatype>][;base64],<data></data> или валиден нормален URL, ако липсва се замества с URL на аватара по подразбиране в зависимост от пола);
* */

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  username: {
    type: String,
    default: null,
    required: true,
    unique: true,
    maxlength: 15,
    match: /^[0-9a-zA-Z]*$/,
  },
  password: {
    type: String,
    default: null,
    required: true,
    minlength: 8,
    match: /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/
  },
  gender: {
    type: String,
    default: 'male',
    enum: ['male', 'female'],
  },
  role: {
    type: String,
    default: 'user',
    enum: ['user', 'admin'],
  },
  avatarUrl: {
    type: String,
    default: function() {
      return this.gender === 'male' ? 'male url here' : 'female url here'
    },
  },
  description: {
    type: String,
    maxlength: 512,
  },
  status: {
    type: String,
    default: 'active',
    enum: ['active', 'suspended', 'deactivated'],
  }
}, {
  timestamps: true,
});

const collectionName = 'user';
const userModel = mongoose.model(collectionName, userSchema);

module.exports = userModel;