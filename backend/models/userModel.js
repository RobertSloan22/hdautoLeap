const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  accountnumber: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  balance: {
    type: Number,
    required: true
    },
    UID: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)