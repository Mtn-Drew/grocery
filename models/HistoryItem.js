const mongoose = require('mongoose')

const HistoryItemSchema = new mongoose.Schema({
  groceryItemName: {
    type: String,
    trim: true,
    required: [true, 'Please add some text'],
  },
  storeName: {
    type: String,
    trim: true,
    required: [true, 'Please add some text'],
  },
  // groceryItemDescription: {
  //   type: String,
  //   trim: true,
  // },
  // groceryItemAisle: {
  //   type: String,
  //   trim: true,
  //   lowercase: true,
  // },
  lastPurchased: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('HistoryItem', HistoryItemSchema)
