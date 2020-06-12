const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OwnerSchema = Schema({
  createdAt: { type: Date, default: Date.now() },
  vat: { type: String, required: true, unique: true },
  name: { type: String, required: true, trim: true },
  phone: { type: Number },
  mobile: { type: Number },
  email: { type: String, unique: true },
  billingAddress: { type: String },
  accountBank: { type: String },
  keys: { type: Boolean, default: false },
  comments: { type: String },
});

module.exports = mongoose.model('Owner', OwnerSchema, 'owners');
