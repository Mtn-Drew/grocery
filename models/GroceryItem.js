const mongoose = require('mongoose')

const GroceryItemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    lowercase: true,
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
    lowercase: true,
  },
  defaultStore: {
    type: String,
    trim: true,
    uppercase: true,
  },
  altStore: {
    type: String,
    trim: true,
  },
  expectedFrequency: Number,
  observedFrequency: '',
  lastPurchased: {
    type: Date,
  },
  checked : {
    type:Boolean,
  },
  
})

module.exports = mongoose.model('GroceryItem', GroceryItemSchema)
