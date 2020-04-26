const mongoose = require('mongoose')

const GroceryItemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    trim: true,
    required: [true, 'Please add some text'],
  },
  description: {
    type: String,
    trim: true,
  },
  aisle: {
    type: String,
    trim: true,
    required: [true, 'Please add in store location'],
  },
  defaultStore: {
    type: String,
    trim: true,
  },
  altStore: {
    type: String,
    trim: true,
  },
  expectedFrequency: Number,
  observedFrequency: '',
})

module.exports = mongoose.model('GroceryItem', GroceryItemSchema)
