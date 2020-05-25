const express = require('express')
const router = express.Router()

const {
  getGroceryItems,
  addGroceryItem,
  deleteGroceryItem,
  updateGroceryItem,
} = require('../controllers/groceryItems')

router.route('/').get(getGroceryItems).post(addGroceryItem)

router.route('/:id').delete(deleteGroceryItem).put(updateGroceryItem)

module.exports = router
