const express = require('express')
const router = express.Router()

const {
  getGroceryItems,
  addGroceryItem,
  deleteGroceryItem,
} = require('../controllers/groceryItems')

router.route('/').get(getGroceryItems).post(addGroceryItem)

router.route('/:id').delete(deleteGroceryItem)

module.exports = router
