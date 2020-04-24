const mongoose = require('mongoose')

const GroceryStoreSchema = new mongoose.Schema({
  storeName: {
    type: String,
    trim: true,
    required: [true, 'Please add some text'],
  },
  description: {
    type: String,
    trim: true,
  },
  location: '',
})

module.exports = mongoose.model('GroceryStore', GroceryStoreSchema)
